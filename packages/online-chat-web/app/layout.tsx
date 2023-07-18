'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

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
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
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
                    <body className={inter.className}>{children}</body>
                </html>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
