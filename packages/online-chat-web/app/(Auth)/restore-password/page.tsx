'use client';

import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

import AuthCard from '@/components/authCard';
import AuthCardHeader from '@/components/authCardHeader';
import EmailInput from '@/components/emailInput';
import ErrorMessage from '@/components/errorMessage';
import useValidator from '@/hooks/useValidator';

const RestorePassword: React.FC = () => {
    const supabase = createPagesBrowserClient();
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailSent, setEmailSend] = useState(false);
    const [validationMessage, validate, resetValidator] = useValidator('email');

    const sendLink = async () => {
        const { error } = await supabase.auth.resetPasswordForEmail(email);

        if (error) {
            setErrorMessage(error.message);
        } else {
            setEmailSend(true);
        }
    };

    const handleSendLink = async () => {
        validate(email) && sendLink();
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
                            resetValidator();
                        }}
                        errorMessage={validationMessage}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSendLink}
                    >
                        Send Link
                    </Button>
                </>
            ) : (
                <>
                    <Typography>Check you email</Typography>
                </>
            )}
            <ErrorMessage
                closeHandler={handleClose}
                errorMessage={errorMessage}
            />
        </AuthCard>
    );
};

export default RestorePassword;
