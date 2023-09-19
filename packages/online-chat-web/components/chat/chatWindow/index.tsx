'use client';

import { Stack } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import MessageInput from './messageInput';
import Header from './header';
import Message from './message';
import { MessageInfo } from '@/mocks';

const useCss = makeStyles()(theme => {
    return {
        chatWindow: {
            flex: 1,
            background: theme.palette.primary.dark,
        },
        chatMessages: {
            flexDirection: 'column-reverse',
            width: '100%',
            padding: '0 20%',
            alignSelf: 'center',
            flex: 1,
            overflowY: 'hidden',
            scrollbarWidth: 'thin',
            marginBottom: theme.spacing(2),
            gap: theme.spacing(2),

            '&:hover': {
                overflowY: 'scroll',
                marginRight: 0,
                marginLeft: 0,
                paddingRight: 'calc(20% - 4px)',
            },

            '&::-webkit-scrollbar': {
                width: theme.spacing(0.5),
            },

            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.primary.light,
                borderRadius: theme.spacing(1),
            },
        },
        container: {
            '@media (min-width: 1200px) ': {
                maxWidth: 'none',
            },

            ' @media (min-width: 600px)': {
                padding: 0,
            },
        },
    };
});
interface ChatWindowProps {
    chatHistory: MessageInfo[];
    chatInfo: {
        chatName: string;
        isOnline: boolean;
        lastSeen: Date;
        showChat: boolean;
    };
}
const ChatWindow: React.FC<ChatWindowProps> = ({ chatHistory, chatInfo }) => {
    const { classes } = useCss();
    console.log({ chatHistory });

    return (
        <Stack className={classes.chatWindow}>
            {chatInfo.showChat && (
                <>
                    <Header {...chatInfo} />
                    <Stack className={classes.chatMessages}>
                        {chatHistory.map((message, index) => (
                            <Message {...message} key={index} />
                        ))}
                    </Stack>
                    <MessageInput />
                </>
            )}
        </Stack>
    );
};

export default ChatWindow;
