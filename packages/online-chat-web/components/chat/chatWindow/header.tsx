import { Avatar, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useCss = makeStyles()(theme => ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    header: {
        background: theme.palette.primary.main,
        flexDirection: 'row',
    },
    companionInfo: {
        flex: 1,
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
    },
    companion: { fontWeight: 'bold' },
    status: {},
}));

interface HeaderProps {
    userName: string;
    isOnline: boolean;
    lastSeen: Date;
}

const Header: React.FC<HeaderProps> = ({ userName, isOnline, lastSeen }) => {
    const { classes } = useCss();

    return (
        <Stack className={classes.header}>
            <Avatar className={classes.avatar}>{userName[0]}</Avatar>
            <Stack className={classes.companionInfo}>
                <Typography className={classes.companion} variant="h6">
                    {userName}
                </Typography>
                <Typography className={classes.status}>
                    {isOnline ? 'online' : lastSeen.getDay()}
                </Typography>
            </Stack>
        </Stack>
    );
};
export default Header;
