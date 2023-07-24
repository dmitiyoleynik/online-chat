'use client';

import React, { ReactNode } from 'react';

import { CssBaseline, IconButton, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ModeToggler: React.FC = () => {
    const { toggleColorMode } = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <IconButton
            sx={{ maxWidth: 'fit-content', alignSelf: 'flex-end' }}
            onClick={toggleColorMode}
            color="inherit"
        >
            {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
            ) : (
                <Brightness4Icon />
            )}
        </IconButton>
    );
};

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

export const MUIProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    background: {
                        default: mode === 'dark' ? '#2E2B2B' : '#E2E8F0',
                    },
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
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
