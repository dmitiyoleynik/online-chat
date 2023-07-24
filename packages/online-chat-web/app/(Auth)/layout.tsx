'use client';

import { ModeToggler } from '@/components/theme';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ModeToggler />
            {children}
        </>
    );
}
