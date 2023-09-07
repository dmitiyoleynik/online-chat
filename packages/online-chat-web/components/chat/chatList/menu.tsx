import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from 'tss-react/mui';

const useCss = makeStyles()(theme => ({
    iconButton: {
        marginRight: theme.spacing(1),
        color: theme.palette.grey[400], //TODO:???
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)', //TODO:???
            boxShadow: 'none',
        },
    },
}));

const Menu: React.FC = () => {
    const { classes } = useCss();

    return (
        <IconButton disableRipple className={classes.iconButton}>
            <MenuIcon />
        </IconButton>
    );
};

export default Menu;
