
import { Box, Button, FormControl, FormControlLabel, TextField } from '@mui/material';
import { FaUserAlt } from "react-icons/fa"
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
            >
                <form>
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
                            
                            <Button variant="contained" margin="dense">Login</Button>
                        </Box>
                      
                    </FormControl>
                </form>
            </Box>
        </React.Fragment>

    )
}

export default Login