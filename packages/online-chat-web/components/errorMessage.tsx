import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    closeHandler: () => void;
    errorMessage: string;
}

const ErrorMessage: React.FC<Props> = props => {
    const { closeHandler, errorMessage } = props;

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={!!errorMessage}
            autoHideDuration={6000}
            onClose={closeHandler}
            message={errorMessage}
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    onClick={closeHandler}
                >
                    <CloseIcon />
                </IconButton>
            }
        />
    );
};

export default ErrorMessage;
