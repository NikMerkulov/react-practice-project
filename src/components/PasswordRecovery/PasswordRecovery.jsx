import { useState } from 'react'
import { Container, Paper, Stack, TextField, Typography, InputAdornment, IconButton, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form'
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined } from '@mui/icons-material'

const PasswordRecovery = () => {
  const { register, handleSubmit } = useForm()
  const [visibility, setVisibility] = useState(false)

  const onSubmit = data => {
    console.log(data)
  }

  const styles = {
    container: {
      background: '#FFF',
      boxShadow: '0px 4px 96px rgba(10, 9, 75, 0.21)',
      borderRadius: '15px',
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

  return (
    <Container sx={styles.container} maxWidth='sm' disableGutters>
      <Box sx={styles.header}>
        <Typography variant='h4' sx={{ color: '#FFF', fontWeight: 'bold'}}>
          Восстановление пароля
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} sx={{ width: '100%', padding: '40px 50px', boxSizing: 'border-box'}}>
          <Paper>
            <TextField
              {...register('email')}
              type='email'
              autoComplete='email'
              label='Email'
              name='email'
              variant='standard'
              fullWidth
              InputProps={{
                startAdornment: <EmailOutlined />
              }}
            />
          </Paper>
          <Paper>
            <TextField
              {...register('password')}
              type={visibility ? 'text' : 'password'}
              label='Пароль'
              name='password'
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
          <Paper>
            <TextField
              {...register('repeatPassword')}
              type={visibility ? 'text' : 'password'}
              label='Повторите пароль'
              name='repeatPassword'
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
              Восстановить пароль
            </Typography>
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default PasswordRecovery