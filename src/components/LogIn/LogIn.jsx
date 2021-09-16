import loginImage from '../../assets/images/login.png'
import { Link, Container, Avatar, Stack, TextField, Button, Typography, Paper, InputAdornment, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { useForm } from 'react-hook-form'
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const LogIn = () => {
  const { register, handleSubmit } = useForm()
  const [visibility, setVisibility] = useState(false)
  const IMAGE_SIZE = '200px'
  const styles = {
    container: {
      background: '#FFF',
      boxShadow: '0px 4px 96px rgba(10, 9, 75, 0.21)',
      borderRadius: '15px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    header: {
      background: 'linear-gradient(90.01deg, #2A8BF2 0.01%, #0A6CD6 99.99%)',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px',
      boxSizing: 'border-box'
    }
  }
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <Container maxWidth='sm' disableGutters sx={styles.container}>
      <Box sx={styles.header}>
        <Avatar src={loginImage} alt='L' sx={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}/>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction='column' spacing={4} sx={{ width: '100%', padding: '40px 50px', boxSizing: 'border-box'}}>
          <Paper elevation={3}>
            <TextField 
              {...register('email')}
              name='Email'
              type='email'
              label='Email'
              variant='standard'
              autoComplete='email'
              fullWidth
              InputProps={{ 
                startAdornment: <EmailOutlined />
              }}
            />
          </Paper>
          <Paper elevation={3}>
            <TextField
              {...register('password')}
              name='password'
              type={visibility ? 'password' : 'text'}
              label='Пароль'
              variant='standard'
              fullWidth
              InputProps={{ 
                startAdornment: <LockOutlined />,
                endAdornment: 
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      edge='start' 
                      onClick={() => setVisibility(visibility => !visibility)}
                    >
                      {visibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
              }}
            />
          </Paper>
          <Button variant='contained' disableElevation type='submit' sx={{ height: 60 }}>
            <Typography variant='p' fontSize={20}>
              Войти
            </Typography>
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <Link component={RouterLink} to='/PasswordRecovery'>Забыли пароль?</Link>
              <Link component={RouterLink} to='/SignIn'>Регистрация</Link>
          </Box>
        </Stack>
      </form>
    </Container>
  )
}

export default LogIn