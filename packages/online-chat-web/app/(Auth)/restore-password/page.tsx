'use client';

import { useState } from 'react';
import { Button, IconButton, Snackbar, Typography } from '@mui/material';

import AuthCard from '@/components/authCard';
import AuthCardHeader from '@/components/authCardHeader';
import EmailInput from '@/components/emailInput';
import generateValidator from '@/utils/validator';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import CloseIcon from '@mui/icons-material/Close';

const RestorePassword: React.FC = () => {
    const supabase = createPagesBrowserClient();
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [emailSent, setEmailSend] = useState(false);
    const validator = generateValidator('email');
    const sendLink = async () => {
        const validationError = validator(email);
        if (validationError) {
            setValidationMessage(validationError);
        } else {
            const res = await supabase.auth.resetPasswordForEmail(email);
            if (res.error) {
                setErrorMessage(res.error.message);
            } else {
                setEmailSend(true);
            }
        }
    };
    const handleClose = () => {
        setErrorMessage('');
    };
    return (
        <AuthCard>
            <AuthCardHeader title="Restore password" />
            {!emailSent ? (
                <>
                    <EmailInput
                        id="restore-password-email"
                        margin="normal"
                        onChange={e => {
                            setEmail(e.target.value);
                            setValidationMessage('');
                        }}
                        errorMessage={validationMessage}
                    />
                    <Button variant="contained" fullWidth onClick={sendLink}>
                        Send Link
                    </Button>
                </>
            ) : (
                <>
                    <Typography>Check you email</Typography>
                </>
            )}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={!!errorMessage}
                autoHideDuration={6000}
                onClose={handleClose}
                message={errorMessage}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                }
            />
        </AuthCard>
    );
};

export default RestorePassword;
