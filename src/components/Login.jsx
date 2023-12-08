
import { Box, Button, FormControl, Link, TextField } from '@mui/material';

import React from 'react'


function Login() {
    const handleSubmit = async (event) => {
        event.preventDefault();

    };
    return (
        <React.Fragment>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginTop="10px"
            >
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <TextField
                            required
                            id="outlined-required"
                            label="User Name"
                            defaultValue=""
                            margin="dense"
                        />
                        <TextField
                            required
                            type='Password'
                            id="outlined-required"
                            label="Password"
                            defaultValue=""
                            margin="dense"
                        />
                        <Box
                            justifyContent="center"
                            alignItems="center"
                            display='flex'
                            flexDirection='row'
                        >
                            <Box
                                display="flex"
                                flexDirection='column'
                                marginTop='10px'
                            >
                                <Button variant="contained" margin="dense" type="submit">Login</Button>
                                <Box display="flex">
                                    <Link marginTop="10px">New user ? Register Here</Link>
                                    <Link marginTop="10px" marginLeft="25px">Forgot Password ? Reset</Link>
                                </Box>
                            </Box>
                        </Box>
                    </FormControl>
                </form>
            </Box>
        </React.Fragment>

    )
}

export default Login