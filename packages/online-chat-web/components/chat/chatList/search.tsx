import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from 'tss-react/mui';

const getStyles = makeStyles()(theme => {
    return {
        search: {
            borderRadius: theme.spacing(3),
            padding: theme.spacing(1),
            backgroundColor: theme.palette.primary.light,
        },
    };
});

const Search: React.FC = () => {
    const { classes } = getStyles();

    return (
        <TextField
            fullWidth
            className={classes.search}
            placeholder="Search"
            size="small"
            variant="standard"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                disableUnderline: true,
            }}
        />
    );
};

export default Search;
