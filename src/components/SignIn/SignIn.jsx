import { Container, Button, TextField, Typography, IconButton, InputAdornment, Stack, Paper } from '@mui/material'
import { useForm} from 'react-hook-form'
import { Box } from '@mui/system'
import { Visibility, VisibilityOff, PersonOutline, EmailOutlined, LockOutlined } from '@mui/icons-material'
import { useState } from 'react'

const SignIn = () => {
  const [visibility, setVisibility] = useState(false)

  const styles = {
    container: {
      backgroundColor: '#FFF',
      borderRadius: '15px',
      width: 1000
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FFF'
    },
    header: {
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      background: 'linear-gradient(90.01deg, #2A8BF2 0.01%, #0A6CD6 99.99%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }
  }
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <Container sx={styles.container} disableGutters maxWidth='sm'>
      <Box sx={styles.header}>
        <Typography variant='h4' sx={{ color: '#FFF', fontWeight: 'bold'}}>
          Регистрация
        </Typography>    
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} sx={styles.form} width='100%'>
        <Stack direction='column' spacing={4} sx={{ width: '100%', padding: '40px 50px', boxSizing: 'border-box'}}>
          <Paper elevation={3}>
            <TextField
              {...register('firstName')} 
              type='text'
              name='firstName'
              label='Имя'
              variant='standard'
              autoComplete='given-name'
              fullWidth
              InputProps={{
                startAdornment: <PersonOutline/>
              }}
            />
          </Paper>
          <Paper elevation={3}>
            <TextField
              {...register('lastName')} 
              type='text'
              name='lastName'
              label='Фамилия'
              variant='standard'
              autoComplete='family-name'
              fullWidth
              InputProps={{
                startAdornment: <PersonOutline />
              }}
            />
          </Paper>
          <Paper elevation={3}>
            <TextField
              {...register('email')} 
              type='email'
              name='email'
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
              type={visibility ? 'text' : 'password'}
              name='password'
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
          <Paper elevation={3}>
            <TextField
              {...register('repeatPassword')} 
              type={visibility ? 'text' : 'password'}
              name='repeatPassword'
              label='Повторите пароль'
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
          <Button variant='contained' disableElevation type='submit' fullWidth sx={{ height: 60 }}>
            <Typography variant='p' fontSize={20} >
              Зарегистрироваться
            </Typography>
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default SignIn