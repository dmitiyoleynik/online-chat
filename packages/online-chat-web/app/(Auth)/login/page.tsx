'use client';

import EmailInput from '@/components/emailInput';
import PasswordInput from '@/components/passwordInput';
import AuthCardHeader from '@/components/authCardHeader';
import Link from '@/components/link';
import AuthCard from '@/components/authCard';

import generateValidator from '@/utils/validator';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Login: React.FC = () => {
    const supabase = createPagesBrowserClient();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValidationMessage, setEmailValidationMessage] = useState('');

    const validator = useMemo(() => generateValidator('email'), []);

    const SignUp = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email, //: 'dmitiyol2eynik@gmail.com',
            password, //: 'Werthyr1234@3s',
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            router.push('/');
        }
    };

    const handleSignUp = async () => {
        const errorMessage = validator(email);

        if (errorMessage) {
            setEmailValidationMessage(errorMessage);
        } else {
            await SignUp();
        }
    };

    const handleClose = () => {
        setErrorMessage('');
    };

    return (
        <AuthCard
            link={
                <Link align="center" href="/sign-up">
                    Sign up
                </Link>
            }
        >
            <AuthCardHeader title="Welcome" />
            <EmailInput
                id="login-email-input"
                errorMessage={emailValidationMessage}
                onChange={e => {
                    setEmail(e.target.value);
                    setEmailValidationMessage('');
                }}
                margin="dense"
            />
            <PasswordInput
                id="login-password-input"
                onChange={e => {
                    setPassword(e.target.value);
                }}
                margin="dense"
                placeholder="Password"
            />
            <Link
                alignSelf={'flex-end'}
                href="restore-password"
                variant="subtitle2"
            >
                Forgot password?
            </Link>
            <Button onClick={handleSignUp} variant="contained" fullWidth>
                Login
            </Button>
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

export default Login;
