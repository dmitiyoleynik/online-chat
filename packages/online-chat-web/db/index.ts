'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supatypes';
import { cookies } from 'next/headers';
import { ChatFullInfo } from '@/mocks';

const getUser = async () => {
    const supabase = createServerComponentClient<Database>({ cookies });
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
};

const getUsersChats = async (): Promise<ChatFullInfo[]> => {
    const supabase = createServerComponentClient<Database>({ cookies });
    const user = await getUser();
    const { data } = await supabase
        .from('chats')
        .select(
            `id, users(id,fullname), messages(content,created_at,sender_id,isread)`,
        )
        .order('created_at', { foreignTable: 'messages', ascending: false });

    const chats =
        data
            ?.filter(data => data.messages.length !== 0)
            ?.map(chat => ({
                id: chat.id,
                unreadNumber: 0, //TODO
                lastSeen: new Date(),
                isOnline: true,
                companionName:
                    chat.users.find(u => u.id !== user?.id)?.fullname || '',
                messages: chat.messages.map(message => ({
                    isSendByUser: message.sender_id === user?.id,
                    sent: new Date(message.created_at || ''),
                    text: message.content || '',
                    isRead: message.isread || false,
                })),
            })) || [];

    return chats;
};

export { getUser, getUsersChats };
