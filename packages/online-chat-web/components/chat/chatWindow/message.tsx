import { Box, Stack, Typography, useTheme } from '@mui/material';

interface IMessage {
    text: string;
    isSendByUser: boolean;
    isRead: boolean;
    sent: Date;
}

const Message: React.FC<IMessage> = ({ text, isSendByUser, sent }) => {
    const theme = useTheme();
    const messageColor = isSendByUser
        ? theme.palette.secondary.main
        : theme.palette.primary.light;
    const timeColor = isSendByUser
        ? theme.palette.grey[300]
        : theme.palette.text.primary;

    return (
        <Stack
            direction={'row'}
            gap={1}
            sx={{
                backgroundColor: messageColor,
                borderRadius: theme.spacing(1),
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1),
                paddingTop: theme.spacing(1),
            }}
            alignSelf={isSendByUser ? 'end' : 'start'}
        >
            <Typography paddingBottom={1}>{text}</Typography>
            <Typography
                paddingTop={1}
                sx={{
                    color: timeColor,
                    marginLeft: 'auto',
                    fontSize: '0.8rem',
                    bottom: 0,
                }}
            >
                {sent.getHours().toString().padStart(2, '0')}:
                {sent.getMinutes().toString().padStart(2, '0')}
            </Typography>
        </Stack>
    );
};
export default Message;
