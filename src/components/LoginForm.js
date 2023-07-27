import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import AuthContext from '../auth/AuthContext'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    border: '1px solid',
    padding: '10px',
    borderRadius: '5px'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '16px'
  },
  textField: {
    margin: '8px 0'
  },
  formControl: {
    margin: '8px 0'
  },
  button: {
    margin: '8px 0',
    width: '10ch'
  }
}

function LoginForm({ callback }) {
  const [username] = useState('YourUserName')
  const [password] = useState('12345')
  const auth = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleLogin = () => {
    auth.singin(username, callback)
  }

  return (
    <Box sx={styles.formContainer} component="form" gap={4}>
      <Typography sx={styles.heading}>Login</Typography>

      <TextField
        disabled
        label="Username"
        defaultValue="user"
        value={username}
        sx={styles.textField}
      />

      <FormControl sx={styles.formControl} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

        <OutlinedInput
          disabled
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button onClick={handleLogin} variant="contained" sx={styles.button}>
        Login
      </Button>
    </Box>
  )
}

export default LoginForm
