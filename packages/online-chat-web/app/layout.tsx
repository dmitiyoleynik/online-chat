'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {};

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ColorModeContext.Provider
            value={{
                toggleColorMode,
            }}
        >
            <ThemeProvider theme={theme}>
                <html lang="en">
                    <body
                        className={inter.className}
                        style={{
                            backgroundColor:
                                theme.palette.mode === 'dark'
                                    ? '#2E2B2B'
                                    : '#E2E8F0',
                        }}
                    >
                        {children}
                    </body>
                </html>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
