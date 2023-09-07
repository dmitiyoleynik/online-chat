import { makeStyles } from 'tss-react/mui';
import { Avatar, Chip, Stack, Typography } from '@mui/material';

import type { Chat } from '@/mocks';
import { getFormatedTime } from '@/utils';

const useCss = makeStyles<{ isSelected: boolean }>()(
    (theme, { isSelected }) => ({
        chat: {
            flexDirection: 'row',
            alignItems: 'center',
            spacing: theme.spacing(1),
            borderRadius: theme.spacing(2),
            padding: theme.spacing(1),
            backgroundColor: isSelected
                ? theme.palette.secondary.main
                : theme.palette.primary.main,

            '&:hover': {
                backgroundColor: isSelected
                    ? theme.palette.secondary.main
                    : theme.palette.primary.light,
            },
        },
        avatar: {
            width: 54,
            height: 54,
            marginRight: theme.spacing(1),
        },
        lastMessage: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            paddingRight: theme.spacing(1),
        },
        messageContainer: {
            flexDirection: 'row',
            minWidth: 0,
            justifyContent: 'space-between',
        },
        lastMessageInfo: {
            flexDirection: 'column',
            minWidth: 0,
            flex: 1,
        },
        senderContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    }),
);

const Chat: React.FC<Chat> = ({
    companionName,
    lastMessage,
    unreadNumber,
    isSelected,
}) => {
    const { classes } = useCss({ isSelected });
    return (
        <Stack className={classes.chat}>
            <Avatar className={classes.avatar}>{companionName[0]}</Avatar>
            <Stack className={classes.lastMessageInfo}>
                <Stack className={classes.senderContainer}>
                    <span>{companionName}</span>
                    <span>{getFormatedTime(lastMessage.sent)}</span>
                </Stack>
                <Stack className={classes.messageContainer}>
                    <Typography className={classes.lastMessage}>
                        {lastMessage.text}
                    </Typography>
                    {!!unreadNumber && (
                        <Chip label={unreadNumber} size="small" />
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Chat;
