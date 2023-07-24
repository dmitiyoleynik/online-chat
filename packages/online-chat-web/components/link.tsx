import { LinkProps, Link as MUILink } from '@mui/material';
import NextLink from 'next/link';

const Link: React.FC<LinkProps> = props => {
    return (
        <MUILink {...props} component={NextLink}>
            {props.children}
        </MUILink>
    );
};

export default Link;
