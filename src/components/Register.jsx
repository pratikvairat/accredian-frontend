import { Box, FormControl, TextField, Button, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../routes/api';
import axios from 'axios';

function Register() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [token,setToken]=useState(localStorage.getItem('token')||'');
  const navigate=useNavigate();

  const handleRegister = () => {
    console.log(API.BASE_URL)
    axios.post(`${API.BASE_URL}/register`, { username, password, email })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };

  useEffect(()=>{
    if(token){
      navigate('/profiles')
    }
  },[token]);
  const handleSubmit = async (event) => {
    event.preventDefault();

};
  return (
    <Box
      display='flex'
      flexDirection='column'
      marginTop='10px'
    >
      <form onSubmit={handleSubmit}> 
        <FormControl
          display='flex'
          flexDirection='column'>
          <TextField
            required
            id="outlined-required"
            label="User name"
            defaultValue=""
            margin="dense"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            margin="dense"
            onChange={(e) => setEmail(e.target.value)}

          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Confirm password"
            defaultValue=""
            margin="dense"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Box
            display="flex"
            flexDirection='column'
            marginTop='10px'
          >
            <Button variant="contained" margin="dense" type="submit" onClick={handleRegister}>Register</Button>
            <Box display="flex">
              <Link marginTop="15px" marginX='70px'><a href='/'>Registered ? Login Here</a></Link>
             
            </Box>
          </Box>
        </FormControl>
      </form>
    </Box>
  )
}

export default Register