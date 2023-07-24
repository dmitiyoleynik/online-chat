'use client';

import { ModeToggler } from '@/components/theme';
import { Stack } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Stack>
            <ModeToggler />
            {children}
        </Stack>
    );
}
