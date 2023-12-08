import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import Login from './Login'
import { Box } from '@mui/material'
import Register from './Register'
function UserProfiles() {
    return (
        <Box
            marginTop={20}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <FaUserAlt size={50} color="blue"/>
            <Register/>
        </Box>
    )
}

export default UserProfiles