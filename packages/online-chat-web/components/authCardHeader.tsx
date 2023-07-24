import { Avatar, Stack, Typography, useTheme } from '@mui/material';

interface Props {
    title?: string;
}

const AuthCardHeader: React.FC<Props> = ({ title }) => {
    const theme = useTheme();

    return (
        <Stack alignItems="center">
            <Avatar
                sx={{
                    height: theme.spacing(10),
                    width: theme.spacing(10),
                    bgcolor: 'teal',
                    color: 'white',
                }}
            />

            {title && <Typography variant="h3">{title}</Typography>}
        </Stack>
    );
};

export default AuthCardHeader;
