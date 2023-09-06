import { Avatar, Stack, Typography } from '@mui/material';
interface Chat {
    userName: string;
    isOnline: boolean;
    lastSeen: Date;
}

const Header: React.FC<Chat> = ({ userName, isOnline, lastSeen }) => {
    return (
        <Stack direction={'row'} sx={{ background: '#2E2B2B' }}>
            <Avatar
                sx={{
                    width: 54,
                    height: 54,
                    marginLeft: 2,
                    marginTop: 1,
                    marginBottom: 1,
                }}
            >
                {userName[0]}
            </Avatar>
            <Stack marginLeft={2} flex={1} marginTop={1}>
                <Typography fontWeight={'bold'} variant="h6">
                    {userName}
                </Typography>
                <Typography>
                    {isOnline ? 'online' : lastSeen.getDay()}
                </Typography>
            </Stack>
        </Stack>
    );
};
export default Header;
