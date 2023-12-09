
import { Box, Button, FormControl, Link, TextField } from '@mui/material';
import React, { useState } from 'react'
import { API } from '../routes/api';
import axios from 'axios';
import { redirect } from 'react-router';


function Login() {
    const [password,setPassword]=useState('');
    const [username,setUsername]=useState('');
    const [token,setToken]=useState(localStorage.getItem('token')||'');
    
    const handleLogin = () => {
        axios.post(`${API.BASE_URL}/login`, { username, password })
          .then((response) => {
            console.log(response)
            const token = response.data.token;
            setToken(token);
            
            localStorage.setItem('token', token);
          })
          .catch((error) => {
            
            console.error(error.response.data.message);
          });
    };

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
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                        <TextField
                            required
                            type='Password'
                            id="outlined-required"
                            label="Password"
                            defaultValue=""
                            margin="dense"
                            onChange={(e) => setPassword(e.target.value)}
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
                                <Button variant="contained" margin="dense" type="submit" onClick={handleLogin}>Login</Button>
                                <Box display="flex">
                                    <Link marginTop="15px" marginX='60px'><a href='/register'>New user ? Register Here</a></Link>
                                    
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