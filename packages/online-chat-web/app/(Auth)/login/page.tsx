'use client';

import { Button } from '@mui/material';

import EmailInput from '@/components/emailInput';
import PasswordInput from '@/components/passwordInput';
import AuthCardHeader from '@/components/authCardHeader';
import Link from '@/components/link';
import AuthCard from '@/components/authCard';

const Login: React.FC = () => {
    return (
        <AuthCard
            link={
                <Link align="center" href="/sign-up">
                    Sign up
                </Link>
            }
        >
            <AuthCardHeader title="Welcome" />
            <EmailInput margin="normal" />
            <PasswordInput placeholder="Password" />
            <Link
                alignSelf={'flex-end'}
                href="restore-password"
                variant="subtitle2"
            >
                Forgot password?
            </Link>
            <Button variant="contained" fullWidth>
                Login
            </Button>
        </AuthCard>
    );
};

export default Login;
