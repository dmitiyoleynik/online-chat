'use client';

import NextLink from 'next/link';
import {
    Avatar,
    Button,
    Card,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';
import { Link as MUILink } from '@mui/material';

import EmailInput from '@/components/emailInput';
import PasswordInput from '@/components/passwordInput';
import ModeToggler from '@/components/modeToggler';

const Login: React.FC = () => {
    const theme = useTheme();

    return (
        <Stack height="70vh" width="100%">
            <ModeToggler />
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
                    <Avatar
                        sx={{
                            height: theme.spacing(10),
                            width: theme.spacing(10),
                            bgcolor: 'teal',
                            color: 'white',
                        }}
                    />
                    <Typography
                        variant="h3"
                        sx={{ marginBottom: theme.spacing(4) }}
                    >
                        Welcome
                    </Typography>
                    <EmailInput margin="normal" />
                    <PasswordInput />
                    <Typography alignSelf={'flex-end'} variant="subtitle2">
                        Forgot password?
                    </Typography>
                    <Button variant="contained" fullWidth>
                        Login
                    </Button>
                </Stack>
            </Card>
            <MUILink align="center" component={NextLink} href="/sign-up">
                Sign up
            </MUILink>
        </Stack>
    );
};

export default Login;
