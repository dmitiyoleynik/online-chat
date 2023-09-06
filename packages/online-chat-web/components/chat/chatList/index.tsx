import { Stack } from '@mui/material';
import Search from '@/components/chat/chatList/search';
import Menu from '@/components/chat/chatList/menu';
import Chat, { mockedChats } from '@/components/chat/chatList/chat';
import { makeStyles } from 'tss-react/mui';

const useCss = makeStyles()(theme => {
    return {
        main: {
            '&:hover': {
                overflowY: 'scroll',
                marginRight: 0,
            },
            '&::-webkit-scrollbar': {
                width: theme.spacing(1),
            },
            '&::-webkit-scrollbar-track': {
                height: '50px',
            },

            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.grey[900],
                borderRadius: '20px',
                height: '50px',
            },
        },
    };
});

const ChatList: React.FC = () => {
    const { classes } = useCss();
    return (
        <Stack sx={{ width: '25vw' }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                sx={{
                    marginTop: 0.5,
                    marginBottom: 1,
                    marginLeft: 1,
                    marginRight: 2,
                }}
            >
                <Menu />
                <Search />
            </Stack>
            <Stack
                marginLeft={1}
                marginRight={1}
                className={classes.main}
                sx={{ overflowY: 'hidden', scrollbarWidth: 'thin' }}
            >
                {mockedChats.map(chat => (
                    <Chat key={chat.id} {...chat}></Chat>
                ))}
            </Stack>
        </Stack>
    );
};

export default ChatList;
