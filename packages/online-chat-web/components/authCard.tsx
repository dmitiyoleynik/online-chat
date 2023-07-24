import { Card, Stack, useTheme } from '@mui/material';

interface Props {
    children?: React.ReactNode;
    link?: React.ReactNode;
}

const AuthCard: React.FC<Props> = props => {
    const theme = useTheme();

    return (
        <Stack height="65vh" width="100%">
            <Card
                sx={{
                    margin: 'auto auto 0 auto',
                    alignContent: 'center',
                    padding: theme.spacing(2),
                    width: '25vw',
                    height: 'auto',
                }}
            >
                <Stack width="100%" alignItems="center">
                    {props.children}
                </Stack>
            </Card>
            {props.link}
        </Stack>
    );
};

export default AuthCard;
