'use client';

import { ReactNode } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes';

const MUIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
export default MUIProvider;
