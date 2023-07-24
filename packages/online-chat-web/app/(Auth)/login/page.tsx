'use client';

import { Button, Card, Stack, Typography, useTheme } from '@mui/material';

import EmailInput from '@/components/emailInput';
import PasswordInput from '@/components/passwordInput';
import AuthCardHeader from '@/components/authCardHeader';
import Link from '@/components/link';

const Login: React.FC = () => {
    const theme = useTheme();

    return (
        <Stack height="65vh" width="100%">
            <Card
                sx={{
                    margin: 'auto auto 0 auto',
                    alignContent: 'center',
                    padding: theme.spacing(2),
                    width: '25vw',
                    height: 'auto',
                }}
            >
                <Stack width="100%" alignItems="center">
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
                </Stack>
            </Card>
            <Link align="center" href="/sign-up">
                Sign up
            </Link>
        </Stack>
    );
};

export default Login;
