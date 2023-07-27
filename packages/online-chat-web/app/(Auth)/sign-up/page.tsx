'use client';

import { Button, TextField, useTheme, InputAdornment } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import PasswordInput from '@/components/passwordInput';
import EmailInput from '@/components/emailInput';
import AuthCardHeader from '@/components/authCardHeader';
import Link from '@/components/link';
import AuthCard from '@/components/authCard';

const SignUp: React.FC = () => {
    const theme = useTheme();

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
                sx={{ marginBottom: theme.spacing(2) }}
            />
            <TextField
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
            />
            <PasswordInput
                id="sign-up-password"
                placeholder="Password"
                sx={{ marginBottom: theme.spacing(2) }}
            />
            <PasswordInput
                id="sign-up-confirm-password"
                placeholder="Confirm Password"
                sx={{ marginBottom: theme.spacing(2) }}
            />
            <Button variant="contained" fullWidth>
                Register
            </Button>
        </AuthCard>
    );
};

export default SignUp;
