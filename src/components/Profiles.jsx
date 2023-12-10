import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API } from '../routes/api';

function Profiles() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setProfile(null);
      navigate('/');
    } else {
      axios.get(`${API.BASE_URL}/profile`, { headers: { Authorization: `${token}` } })
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error(error.response.data.message);
        });
    }
  }, [navigate]);

  const onLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      marginTop='10px'
    >
      <Typography variant='h4'>Welcome </Typography>
      <Typography variant='body1' margin='10px'>
        Username: {profile?.username}
      </Typography>
      <Typography variant='body1' margin='10px'>
        Email: {profile?.email}
      </Typography>
      <Button variant="outlined" margin="dense" type="submit" onClick={onLogout}>
        Log out
      </Button>
    </Box>
  );
}

export default Profiles;
