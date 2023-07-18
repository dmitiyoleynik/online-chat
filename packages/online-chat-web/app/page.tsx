'use client';

import { Box, IconButton, useTheme } from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import { ColorModeContext } from './layout';

export default function Home() {
    const { toggleColorMode } = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                }}
            >
                <IconButton
                    sx={{ ml: 1 }}
                    onClick={toggleColorMode}
                    color="inherit"
                >
                    {theme.palette.mode === 'dark' ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
            </Box>
        </div>
    );
}
