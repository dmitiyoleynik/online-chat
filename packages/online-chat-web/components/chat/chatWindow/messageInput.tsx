import { TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const getStyles = makeStyles()(theme => {
    return {
        root: {
            borderRadius: theme.spacing(2),
            padding: theme.spacing(1.5),
            backgroundColor: theme.palette.primary.main,
            width: '40%',
            alignSelf: 'center',
            marginBottom: theme.spacing(2),
        },
    };
});
const MessageInput: React.FC = () => {
    const { classes } = getStyles();
    return (
        <TextField
            id="outlined-basic"
            variant="standard"
            placeholder="Message"
            size="medium"
            className={classes.root}
            InputProps={{
                disableUnderline: true,
            }}
        />
    );
};
export default MessageInput;
