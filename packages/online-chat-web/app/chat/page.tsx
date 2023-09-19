import Chat from '@/components/chat';
import { getUsersChats } from '@/db';

const ChatPage: React.FC = async () => {
    const chats = await getUsersChats();

    return <Chat chats={chats} />;
};
export default ChatPage;
