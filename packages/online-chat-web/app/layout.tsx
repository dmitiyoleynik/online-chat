import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

import './globals.css';
import MUIProvider from '@/theme';

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
                <head></head>
                <body className={inter.className}>
                    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
                        {children}
                    </NextAppDirEmotionCacheProvider>
                </body>
            </html>
        </MUIProvider>
    );
}
