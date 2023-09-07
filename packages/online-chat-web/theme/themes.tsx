import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: 'rgb(33, 33, 33)',
        },
        primary: {
            main: 'rgb(33, 33, 33)',
            light: 'rgba(44,44,44,255)',
            dark: '#13111f',
        },
        secondary: { main: '#766ac8', light: '', dark: '' },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
        },
        primary: {
            main: '#ffffff',
            light: '#f4f4f5',
            dark: '#a5b7c9',
        },
        secondary: { main: '#3390ec', light: '', dark: '' },
    },
});
