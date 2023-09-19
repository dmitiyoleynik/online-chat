import { IconButton, Stack, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SendIcon from '@mui/icons-material/Send';

const getStyles = makeStyles()(theme => {
    return {
        stack: {
            marginBottom: theme.spacing(2),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        search: {
            borderRadius: theme.spacing(2),
            padding: theme.spacing(1.5),
            backgroundColor: theme.palette.primary.main,
            width: '40%',
            alignSelf: 'center',
        },
        button: {
            marginLeft: theme.spacing(1),
            backgroundColor: theme.palette.primary.main,
            width: theme.spacing(7),
            height: theme.spacing(7),
            borderRadius: theme.spacing(2),
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
            },
        },
        buttonImage: {
            color: theme.palette.secondary.light,
        },
    };
});
const MessageInput: React.FC = () => {
    const { classes } = getStyles();
    return (
        <Stack className={classes.stack}>
            <TextField
                id="outlined-basic"
                variant="standard"
                placeholder="Message"
                size="medium"
                className={classes.search}
                InputProps={{
                    disableUnderline: true,
                }}
            />
            <IconButton disableRipple className={classes.button}>
                <SendIcon className={classes.buttonImage} />
            </IconButton>
        </Stack>
    );
};
export default MessageInput;
