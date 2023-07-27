'use client';

import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import inputWithValidation from '@/HOC/inputWithValidation';

const EmailInput: React.FC<TextFieldProps> = props => {
    return (
        <TextField
            {...props}
            fullWidth={true}
            size="small"
            required
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

export default inputWithValidation(EmailInput);
