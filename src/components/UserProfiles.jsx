import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

import { Box } from '@mui/material'
import Register from './Register'
import Profiles from './Profiles'
import Login from './Login'
import { Route, Routes } from 'react-router'
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

            <Routes>
                <Route index path='/' Component={Login}></Route>
                <Route path='/register' Component={Register}></Route>
                <Route path='/profiles' Component={Profiles}></Route>
            </Routes>
        </Box>
    )
}

export default UserProfiles