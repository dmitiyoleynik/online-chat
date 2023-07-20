import { useState } from 'react';

import {
    IconButton,
    InputAdornment,
    TextField,
    TextFieldProps,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';

const PasswordInput: React.FC<TextFieldProps> = props => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(show => !show);

    return (
        <TextField
            {...props}
            type={showPassword ? 'text' : 'password'}
            fullWidth={true}
            size="small"
            placeholder="Password"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};
export default PasswordInput;
