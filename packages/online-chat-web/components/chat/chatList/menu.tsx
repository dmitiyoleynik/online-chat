import { IconButton, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Menu: React.FC = () => {
    const theme = useTheme();
    return (
        <IconButton
            disableRipple
            sx={{
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    boxShadow: 'none',
                },

                marginRight: 1,
                color: theme.palette.grey[400],
            }}
        >
            <MenuIcon />
        </IconButton>
    );
};

export default Menu;
