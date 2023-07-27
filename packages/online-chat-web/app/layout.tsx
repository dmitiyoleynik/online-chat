import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { MUIProvider } from '@/components/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MUIProvider>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </MUIProvider>
    );
}
