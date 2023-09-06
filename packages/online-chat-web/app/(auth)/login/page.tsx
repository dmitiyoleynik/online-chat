'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@mui/material';

import EmailInput from '@/components/emailInput';
import PasswordInput from '@/components/passwordInput';
import AuthCardHeader from '@/components/authCardHeader';
import Link from '@/components/link';
import AuthCard from '@/components/authCard';
import ErrorMessage from '@/components/errorMessage';
import useValidator from '@/hooks/useValidator';

const Login: React.FC = () => {
    const supabase = createPagesBrowserClient();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValidationMessage, validateEmail, resetEmailValidator] =
        useValidator('email');
    const [
        passwordValidationMessage,
        validatePassword,
        resetPasswordValidator,
    ] = useValidator('notEmpty', 'minLength');

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
        validateEmail(email) && validatePassword(password) && SignUp();
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
                    emailValidationMessage && resetEmailValidator();
                }}
                margin="dense"
            />
            <PasswordInput
                id="login-password-input"
                errorMessage={passwordValidationMessage}
                onChange={e => {
                    setPassword(e.target.value);
                    passwordValidationMessage && resetPasswordValidator();
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
            <ErrorMessage
                errorMessage={errorMessage}
                closeHandler={handleClose}
            />
        </AuthCard>
    );
};

export default Login;
