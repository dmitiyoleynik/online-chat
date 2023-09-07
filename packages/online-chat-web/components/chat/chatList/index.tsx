import { Stack } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import Search from '@/components/chat/chatList/search';
import Menu from '@/components/chat/chatList/menu';
import Chat from '@/components/chat/chatList/chat';
import { mockedChats } from '@/mocks';

const useCss = makeStyles()(theme => {
    return {
        chatList: { width: '25vw' },
        body: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),

            overflowY: 'hidden',
            scrollbarWidth: 'thin',

            '&:hover': {
                overflowY: 'scroll',
                marginRight: 0,
            },

            '&::-webkit-scrollbar': {
                width: theme.spacing(1),
            },

            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.primary.light,
                borderRadius: theme.spacing(1),
            },
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',

            marginTop: theme.spacing(0.5),
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(2),
        },
    };
});

const ChatList: React.FC = () => {
    const { classes } = useCss();

    return (
        <Stack className={classes.chatList}>
            <Stack className={classes.header}>
                <Menu />
                <Search />
            </Stack>
            <Stack className={classes.body}>
                {mockedChats.map(chat => (
                    <Chat key={chat.id} {...chat}></Chat>
                ))}
            </Stack>
        </Stack>
    );
};

export default ChatList;
