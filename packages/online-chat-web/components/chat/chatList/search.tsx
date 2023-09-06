import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from 'tss-react/mui';

const getStyles = makeStyles()(theme => {
    return {
        root: {
            borderRadius: 320,
            padding: 8,
            backgroundColor: theme.palette.grey[900],
        },
    };
});

const Search: React.FC = () => {
    const { classes } = getStyles();
    return (
        <TextField
            fullWidth
            className={classes.root}
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
