'use client';

import { Divider, Stack } from '@mui/material';
import ChatList from './chatList';
import ChatWindow from './chatWindow';
import { useState } from 'react';
import { ChatFullInfo, MessageInfo } from '@/mocks';

interface Props {
    chats: ChatFullInfo[];
}

const Chat: React.FC<Props> = ({ chats }) => {
    const [selectedChat, setSelectedChat] = useState<ChatFullInfo | undefined>(
        undefined,
    );

    return (
        <Stack
            height={'100vh'}
            direction={'row'}
            divider={<Divider orientation="vertical" flexItem />}
        >
            <ChatList
                chats={chats.map(chat => ({
                    id: chat.id,
                    companionName: chat.companionName,
                    unreadNumber: chat.unreadNumber,
                    isSelected: chat.id === selectedChat?.id,
                    lastMessage: chat.messages[0],
                    onClick: () => {
                        setSelectedChat(chats.find(c => c.id === chat.id));
                    },
                }))}
            ></ChatList>
            <ChatWindow
                chatInfo={{
                    chatName: selectedChat?.companionName || 'No selected chat',
                    lastSeen: selectedChat?.lastSeen || new Date(),
                    isOnline: selectedChat?.isOnline || false,
                    showChat: !!selectedChat,
                }}
                chatHistory={selectedChat?.messages || []}
            />
        </Stack>
    );
};
export default Chat;
