import { Stack, useTheme } from '@mui/material';
import Header from './header';
import MessageInput from './messageInput';
import { makeStyles } from 'tss-react/mui';
import Message from './message';

interface Chat {
    messages: string[] | null;
}

const useCss = makeStyles()(theme => {
    return {
        main: {
            '&:hover': {
                overflowY: 'scroll',
                marginRight: 0,
                marginLeft: 0,
                paddingRight: 'calc(20% - 4px)',
            },
            '&::-webkit-scrollbar': {
                width: theme.spacing(0.5),
            },
            '&::-webkit-scrollbar-track': {
                height: '50px',
            },

            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.grey[700],
                borderRadius: '20px',
                height: '50px',
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

const defaultChat = {
    userName: 'Youryi',
    isOnline: true,
    lastSeen: new Date(),
};
interface IMessage {
    text: string;
    isSendByUser: boolean;
    isRead: boolean;
    sent: Date;
}
const chatHistory: IMessage[] = [
    {
        text: 'Привіт! Як ти сьогодні?',
        isSendByUser: false,
        isRead: true,
        sent: new Date('2023-09-01T10:00:00'),
    },
    {
        text: 'Привіт! Я чудово, дякую!',
        isSendByUser: true,
        isRead: true,
        sent: new Date('2023-09-01T10:05:00'),
    },
    {
        text: 'Що нового?',
        isSendByUser: false,
        isRead: true,
        sent: new Date('2023-09-01T10:10:00'),
    },
    {
        text: 'Нічого особливого, просто працюю.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:15:00'),
    },
    {
        text: 'Я теж сьогодні працюю. Який у тебе план на вечір?',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:20:00'),
    },
    {
        text: 'Планів немає, можливо подивлюся фільм.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:25:00'),
    },
    {
        text: 'Це гарна ідея! Що за фільм ти хочеш подивитися?',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:30:00'),
    },
    {
        text: 'Думаю, подивлюся нову комедію, яку всі рекомендують.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:35:00'),
    },
    {
        text: 'Слухай, а як у тебе справи на роботі?',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:40:00'),
    },
    {
        text: 'На роботі все добре, нічого нового.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:45:00'),
    },
    {
        text: 'Чудово! Бажаю вдалого перегляду фільму!',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:50:00'),
    },
    {
        text: 'Дякую! Згодом поговоримо.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:55:00'),
    },
    {
        text: 'Окей, пиши, якщо щось цікаве трапиться!',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T11:00:00'),
    },
    {
        text: "Обов'язково! До зустрічі!",
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T11:05:00'),
    },
    {
        text: 'До зустрічі! :)',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T11:10:00'),
    },
    {
        text: 'Здоровенькі були! :)',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T11:15:00'),
    },
    {
        text: 'Привіт! Як ти сьогодні?',
        isSendByUser: false,
        isRead: true,
        sent: new Date('2023-09-01T10:00:00'),
    },
    {
        text: 'Привіт! Я чудово, дякую!',
        isSendByUser: true,
        isRead: true,
        sent: new Date('2023-09-01T10:05:00'),
    },
    {
        text: 'Що нового?',
        isSendByUser: false,
        isRead: true,
        sent: new Date('2023-09-01T10:10:00'),
    },
    {
        text: 'Нічого особливого, просто працюю.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:15:00'),
    },
    {
        text: 'Я теж сьогодні працюю. Який у тебе план на вечір?',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:20:00'),
    },
    {
        text: 'Планів немає, можливо подивлюся фільм.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:25:00'),
    },
    {
        text: 'Це гарна ідея! Що за фільм ти хочеш подивитися?',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:30:00'),
    },
    {
        text: 'Думаю, подивлюся нову комедію, яку всі рекомендують.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:35:00'),
    },
    {
        text: 'Слухай, а як у тебе справи на роботі?',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:40:00'),
    },
    {
        text: 'На роботі все добре, нічого нового.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:45:00'),
    },
    {
        text: 'Чудово! Бажаю вдалого перегляду фільму!',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T10:50:00'),
    },
    {
        text: 'Дякую! Згодом поговоримо.',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T10:55:00'),
    },
    {
        text: 'Окей, пиши, якщо щось цікаве трапиться!',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T11:00:00'),
    },
    {
        text: "Обов'язково! До зустрічі!",
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T11:05:00'),
    },
    {
        text: 'До зустрічі! :)',
        isSendByUser: false,
        isRead: false,
        sent: new Date('2023-09-01T11:10:00'),
    },
    {
        text: 'Здоровенькі були! :)',
        isSendByUser: true,
        isRead: false,
        sent: new Date('2023-09-01T11:15:00'),
    },
].reverse();
const ChatWindow: React.FC<Chat> = ({ messages }) => {
    const { classes } = useCss();
    const theme = useTheme();
    return (
        messages && (
            <Stack flex={1} sx={{ background: theme.palette.grey[900] }}>
                <Header {...defaultChat} />
                <Stack
                    direction={'column-reverse'}
                    width="100%"
                    padding={'0 20%'}
                    alignSelf="center"
                    flex={1}
                    // marginRight={theme.spacing(2)}
                    // marginLeft={theme.spacing(2)}
                    sx={{ overflowY: 'hidden', scrollbarWidth: 'thin' }}
                    className={classes.main}
                    marginBottom={2}
                    gap={2}
                >
                    {chatHistory.map((message, index) => (
                        <Message {...message} key={index} />
                    ))}
                </Stack>
                <MessageInput />
            </Stack>
        )
    );
};

export default ChatWindow;
