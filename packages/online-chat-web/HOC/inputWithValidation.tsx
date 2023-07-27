import { Popper, TextFieldProps, Typography, useTheme } from '@mui/material';
import { useRef } from 'react';

const inputWithValidation = (
    WrappedComponent: React.ComponentType<TextFieldProps>,
) => {
    const ComponentWithValidation: React.FC<
        TextFieldProps & { errorMessage?: string; id: string }
    > = props => {
        const emailRef = useRef(null);
        const theme = useTheme();
        return (
            <>
                <div
                    aria-describedby={props.id}
                    ref={emailRef}
                    style={{ width: '100%' }}
                >
                    <WrappedComponent aria-describedby={props.id} {...props} />
                </div>
                <Popper
                    placement="right"
                    id={props.id}
                    open={!!props.errorMessage}
                    anchorEl={emailRef.current}
                    modifiers={[
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 10],
                            },
                        },
                    ]}
                >
                    <Typography
                        sx={{
                            backgroundColor: '#f44336',
                            color: 'white',
                            borderRadius: '4px',
                            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                        }}
                    >
                        {props.errorMessage}
                    </Typography>
                </Popper>
            </>
        );
    };

    return ComponentWithValidation;
};

export default inputWithValidation;
