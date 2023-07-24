'use client';

import PasswordInput from '@/components/passwordInput';
import {
    Button,
    Card,
    Stack,
    TextField,
    useTheme,
    InputAdornment,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailInput from '@/components/emailInput';
import AuthCardHeader from '@/components/authCardHeader';
import Link from '@/components/link';

const SignUp: React.FC = () => {
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
                    <EmailInput sx={{ marginBottom: theme.spacing(2) }} />
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
                        placeholder="Password"
                        sx={{ marginBottom: theme.spacing(2) }}
                    />
                    <PasswordInput
                        placeholder="Confirm Password"
                        sx={{ marginBottom: theme.spacing(2) }}
                    />
                    <Button variant="contained" fullWidth>
                        Register
                    </Button>
                </Stack>
            </Card>
            <Link align="center" href="/login">
                Sign in
            </Link>
        </Stack>
    );
};

export default SignUp;
