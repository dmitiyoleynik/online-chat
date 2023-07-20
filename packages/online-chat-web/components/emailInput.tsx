'use client';

import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const EmailInput: React.FC<TextFieldProps> = props => {
    return (
        <TextField
            {...props}
            fullWidth={true}
            size="small"
            placeholder="Email address"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default EmailInput;
