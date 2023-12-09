import { Box, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
function Profiles() {
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/')
        }
    },[])
    const onLogout=()=>{
        localStorage.removeItem('token');
        navigate('/')
        
    }
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            marginTop='10px'>

            <Typography variant='h4'>Welcome Pratik Vairat</Typography>
            <Typography variant='body1' margin='10px'>Email: pratikvairat30@gmail.com</Typography>
            <Button variant="outlined" margin="dense" type="submit" onClick={onLogout}>Log out</Button>
        </Box>
    )
}

export default Profiles