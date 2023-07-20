'use client';

import React from 'react';

import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ColorModeContext } from '@/app/layout';

const ModeToggler: React.FC = () => {
    const { toggleColorMode } = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <IconButton
            sx={{ maxWidth: 'fit-content' }}
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

export default ModeToggler;
