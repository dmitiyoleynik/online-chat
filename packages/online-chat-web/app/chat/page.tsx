'use client';
import { Divider, Stack } from '@mui/material';
import ChatList from '@/components/chat/chatList';
import ChatWindow from '@/components/chat/chatWindow';
const messages: string[] = [];
const ChatPage: React.FC = () => {
    return (
        <Stack
            height={'100vh'}
            direction={'row'}
            divider={<Divider orientation="vertical" flexItem />}
        >
            <ChatList></ChatList>
            <ChatWindow messages={messages} />
        </Stack>
    );
};
export default ChatPage;
