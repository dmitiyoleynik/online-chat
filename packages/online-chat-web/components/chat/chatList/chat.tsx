import { makeStyles } from 'tss-react/mui';
import { Avatar, Chip, Stack, Typography } from '@mui/material';

interface Message {
    sender: 'you' | 'companion';
    sent: Date;
    message: string;
    isRead: boolean;
}

interface Chat {
    id: string;
    unreadNumber: number;
    companionName: string;
    lastMessage: Message;
}
const useCss = makeStyles()(theme => {
    return {
        chat: {
            borderRadius: theme.spacing(2),
            padding: theme.spacing(1),
            '&:hover': {
                backgroundColor: theme.palette.grey[800],
            },
        },
    };
});
const Chat: React.FC<Chat> = ({ companionName, lastMessage, unreadNumber }) => {
    const { classes } = useCss();
    return (
        <Stack
            direction={'row'}
            className={classes.chat}
            alignItems={'center'}
            spacing={1}
        >
            <Avatar sx={{ width: 54, height: 54 }}>{companionName[0]}</Avatar>
            <Stack direction={'column'} minWidth={0} flex={1}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <span>{companionName}</span>
                    <span>
                        {lastMessage.sent.getHours()}:
                        {lastMessage.sent.getMinutes()}
                    </span>
                </Stack>
                <Stack
                    direction={'row'}
                    minWidth={0}
                    justifyContent={'space-between'}
                >
                    <Typography
                        overflow={'hidden'}
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        {lastMessage.message}
                    </Typography>
                    {!!unreadNumber && (
                        <Chip label={unreadNumber} size="small" />
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
};

const mockChats: Chat[] = [
    {
        id: '1',
        unreadNumber: 2,
        companionName: 'John Doe',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'Hello, how are you?',
            isRead: true,
        },
    },
    {
        id: '2',
        unreadNumber: 0,
        companionName: 'Alice Smith',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "I'm doing well, thanks!",
            isRead: true,
        },
    },
    {
        id: '3',
        unreadNumber: 1,
        companionName: 'Bob Johnson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "What's up?",
            isRead: false,
        },
    },
    // Додайте інші чати за аналогічною схемою
    {
        id: '4',
        unreadNumber: 3,
        companionName: 'Eve Anderson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "How's your day going?",
            isRead: false,
        },
    },
    {
        id: '5',
        unreadNumber: 0,
        companionName: 'Charlie Brown',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'I had a great day!',
            isRead: true,
        },
    },
    {
        id: '6',
        unreadNumber: 0,
        companionName: 'Grace Davis',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: "Let's meet up tomorrow.",
            isRead: true,
        },
    },
    {
        id: '7',
        unreadNumber: 2,
        companionName: 'Oliver Lee',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: 'Sure, where should we meet?',
            isRead: false,
        },
    },
    {
        id: '8',
        unreadNumber: 2,
        companionName: 'Emma White',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message:
                'How about the coffee shop on Main Street? Sounds good. See you there!',
            isRead: true,
        },
    },
    {
        id: '1',
        unreadNumber: 2,
        companionName: 'John Doe',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'Hello, how are you?',
            isRead: true,
        },
    },
    {
        id: '2',
        unreadNumber: 0,
        companionName: 'Alice Smith',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "I'm doing well, thanks!",
            isRead: true,
        },
    },
    {
        id: '3',
        unreadNumber: 1,
        companionName: 'Bob Johnson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "What's up?",
            isRead: false,
        },
    },
    // Додайте інші чати за аналогічною схемою
    {
        id: '4',
        unreadNumber: 3,
        companionName: 'Eve Anderson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "How's your day going?",
            isRead: false,
        },
    },
    {
        id: '5',
        unreadNumber: 0,
        companionName: 'Charlie Brown',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'I had a great day!',
            isRead: true,
        },
    },
    {
        id: '6',
        unreadNumber: 0,
        companionName: 'Grace Davis',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: "Let's meet up tomorrow.",
            isRead: true,
        },
    },
    {
        id: '7',
        unreadNumber: 2,
        companionName: 'Oliver Lee',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: 'Sure, where should we meet?',
            isRead: false,
        },
    },
    {
        id: '8',
        unreadNumber: 2,
        companionName: 'Emma White',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message:
                'How about the coffee shop on Main Street? Sounds good. See you there!',
            isRead: true,
        },
    },
    {
        id: '1',
        unreadNumber: 2,
        companionName: 'John Doe',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'Hello, how are you?',
            isRead: true,
        },
    },
    {
        id: '2',
        unreadNumber: 0,
        companionName: 'Alice Smith',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "I'm doing well, thanks!",
            isRead: true,
        },
    },
    {
        id: '3',
        unreadNumber: 1,
        companionName: 'Bob Johnson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "What's up?",
            isRead: false,
        },
    },
    // Додайте інші чати за аналогічною схемою
    {
        id: '4',
        unreadNumber: 3,
        companionName: 'Eve Anderson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: "How's your day going?",
            isRead: false,
        },
    },
    {
        id: '5',
        unreadNumber: 0,
        companionName: 'Charlie Brown',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'I had a great day!',
            isRead: true,
        },
    },
    {
        id: '6',
        unreadNumber: 0,
        companionName: 'Grace Davis',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: "Let's meet up tomorrow.",
            isRead: true,
        },
    },
    {
        id: '7',
        unreadNumber: 2,
        companionName: 'Oliver Lee',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: 'Sure, where should we meet?',
            isRead: false,
        },
    },
    {
        id: '8',
        unreadNumber: 2,
        companionName: 'Emma White',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message:
                'How about the coffee shop on Main Street? Sounds good. See you there!',
            isRead: true,
        },
    },
    {
        id: '9',
        unreadNumber: 1,
        companionName: 'Liam Harris',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: 'Sounds good. See you there!',
            isRead: false,
        },
    },
    {
        id: '10',
        unreadNumber: 0,
        companionName: 'Ava Martin',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message:
                'How about the coffee shop on Main Street? Great! Looking forward to it.',
            isRead: true,
        },
    },
    {
        id: '11',
        unreadNumber: 0,
        companionName: 'Sarah Wilson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: 'I had a long day at work today.',
            isRead: false,
        },
    },
    {
        id: '12',
        unreadNumber: 0,
        companionName: 'Michael Jones',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'I can imagine. Tell me about it.',
            isRead: true,
        },
    },
    {
        id: '13',
        unreadNumber: 0,
        companionName: 'Emily Davis',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: 'I had back-to-back meetings.',
            isRead: false,
        },
    },
    {
        id: '14',
        unreadNumber: 0,
        companionName: 'Daniel Smith',
        lastMessage: {
            sender: 'you',
            sent: new Date(),
            message: 'That sounds exhausting!',
            isRead: true,
        },
    },
    {
        id: '15',
        unreadNumber: 0,
        companionName: 'Olivia Johnson',
        lastMessage: {
            sender: 'companion',
            sent: new Date(),
            message: 'Yes, it was. I need a break.',
            isRead: false,
        },
    },
];
export default Chat;
export { mockChats as mockedChats };
