'use client';

import { Button } from '@mui/material';

import AuthCard from '@/components/authCard';
import AuthCardHeader from '@/components/authCardHeader';
import EmailInput from '@/components/emailInput';

const RestorePassword: React.FC = () => {
    return (
        <AuthCard>
            <AuthCardHeader title="Restore password" />
            <EmailInput margin="normal" />
            <Button variant="contained" fullWidth>
                Send Link
            </Button>
        </AuthCard>
    );
};

export default RestorePassword;
