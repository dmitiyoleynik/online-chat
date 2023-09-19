import { Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { getFormatedTime } from '@/utils';
import { MessageInfo } from '@/mocks';

const useCss = makeStyles<{ isSendByUser: boolean }>()((
    theme,
    { isSendByUser },
) => {
    const sentColor = isSendByUser
        ? theme.palette.grey[300] //TODO:???
        : theme.palette.text.primary;
    const messageColor = isSendByUser
        ? theme.palette.secondary.main
        : theme.palette.primary.light;
    const align = isSendByUser ? 'end' : 'start';

    return {
        sent: {
            paddingTop: theme.spacing(1),
            color: sentColor,
            marginLeft: 'auto',
            fontSize: '0.8rem', //TODO:???
            bottom: 0,
        },
        message: {
            flexDirection: 'row',
            gap: theme.spacing(1),
            alignSelf: align,
            backgroundColor: messageColor,
            borderRadius: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(1),
        },
    };
});

interface MessageProps extends MessageInfo {}

const Message: React.FC<MessageProps> = ({ text, isSendByUser, sent }) => {
    const { classes } = useCss({ isSendByUser });

    return (
        <Stack className={classes.message}>
            <Typography paddingBottom={1}>{text}</Typography>
            <Typography className={classes.sent}>
                {getFormatedTime(sent)}
            </Typography>
        </Stack>
    );
};
export default Message;
