'use client';

import { useState } from 'react';
import { Button, TextField, useTheme, InputAdornment } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

import PasswordInput from '@/components/passwordInput';
import EmailInput from '@/components/emailInput';
import AuthCardHeader from '@/components/authCardHeader';
import Link from '@/components/link';
import AuthCard from '@/components/authCard';
import ErrorMessage from '@/components/errorMessage';
import inputWithValidation from '@/HOC/inputWithValidation';
import useValidator from '@/hooks/useValidator';

const UsernameInput = inputWithValidation(TextField);

const SignUp: React.FC = () => {
    const supabase = createPagesBrowserClient();
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValidationMessage, emailValidator, resetEmailValidator] =
        useValidator('email');
    const [
        passwordValidationMessage,
        passwordValidator,
        resetPasswordValidator,
    ] = useValidator('hasNumber', 'hasUpperCase', 'minLength', 'notEmpty');
    const [
        usernameValidationMessage,
        usernameValidator,
        resetUsernameValidator,
    ] = useValidator('notEmpty');
    const [passwordMatchesConfirm, setMatch] = useState(true);

    const register = async () => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error?.message) {
            setErrorMessage(error.message);
        }
    };

    const handleRegister = () => {
        setMatch(confirm === password);
        emailValidator(email) &&
            passwordValidator(password) &&
            usernameValidator(username) &&
            passwordMatchesConfirm &&
            register();
    };

    const handleClose = () => {
        setErrorMessage('');
    };

    return (
        <AuthCard
            link={
                <Link align="center" href="/login">
                    Sign in
                </Link>
            }
        >
            <AuthCardHeader title="Welcome" />
            <EmailInput
                id="sign-up-email"
                errorMessage={emailValidationMessage}
                sx={{ marginBottom: theme.spacing(2) }}
                onChange={e => {
                    setEmail(e.target.value);
                    resetEmailValidator();
                }}
            />
            <UsernameInput
                id="sign-up-username"
                fullWidth={true}
                size="small"
                placeholder="Username"
                sx={{ marginBottom: theme.spacing(2) }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonOutlineIcon />
                        </InputAdornment>
                    ),
                }}
                errorMessage={usernameValidationMessage}
                onChange={e => {
                    resetUsernameValidator();
                    setUsername(e.target.value);
                }}
            />
            <PasswordInput
                id="sign-up-password"
                placeholder="Password"
                sx={{ marginBottom: theme.spacing(2) }}
                errorMessage={passwordValidationMessage}
                onChange={e => {
                    resetPasswordValidator();
                    setPassword(e.target.value);
                }}
            />
            <PasswordInput
                id="sign-up-confirm-password"
                placeholder="Confirm Password"
                errorMessage={
                    passwordMatchesConfirm ? '' : 'Have to match with password'
                }
                sx={{ marginBottom: theme.spacing(2) }}
                onChange={e => {
                    setConfirm(e.target.value);
                    setMatch(true);
                }}
            />
            <Button onClick={handleRegister} variant="contained" fullWidth>
                Register
            </Button>
            <ErrorMessage
                errorMessage={errorMessage}
                closeHandler={handleClose}
            />
        </AuthCard>
    );
};
export default SignUp;
