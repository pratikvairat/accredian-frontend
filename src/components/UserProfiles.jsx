import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import Login from './Login'
import { Box } from '@mui/material'
function UserProfiles() {
    return (
        <Box
            marginTop={25}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >

            <FaUserAlt size={50} color="blue" />
            <Login />
        </Box>
    )
}

export default UserProfiles