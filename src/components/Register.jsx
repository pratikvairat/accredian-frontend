import { Box, FormControl, TextField, Button, Link } from '@mui/material'
import React from 'react'

function Register() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      marginTop='10px'
    >
      <form>
        <FormControl
          display='flex'
          flexDirection='column'>
          <TextField
            required
            id="outlined-required"
            label="User name"
            defaultValue=""
            margin="dense"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            margin="dense"
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            margin="dense"
          />
          <TextField
            required
            id="outlined-required"
            label="Confirm password"
            defaultValue=""
            margin="dense"
          />
          <Box
            display="flex"
            flexDirection='column'
            marginTop='10px'
          >
            <Button variant="contained" margin="dense" type="submit">Register</Button>
            <Box display="flex">
              <Link marginTop="15px">Already registered ? Login Here</Link>
              <Link marginTop="15px" marginLeft="25px">Forgot Password ? Reset</Link>
            </Box>
          </Box>
        </FormControl>
      </form>
    </Box>
  )
}

export default Register