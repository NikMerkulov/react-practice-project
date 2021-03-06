import loginImage from '../../assets/images/login.png'
import { Container, Avatar, Stack, TextField, Button, Typography, Paper, InputAdornment, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { useForm } from 'react-hook-form'
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined } from '@mui/icons-material'
import { useState } from 'react'
import useModal from '../../Hooks/useModal'
import Modal from '../Modal/Modal'
import SignIn from '../SignIn/SignIn'
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery'

const LogIn = () => {
  const { register, handleSubmit } = useForm()
  const [visibility, setVisibility] = useState(false)
  const [displaySignIn, switchSignInDisplay] = useModal()
  const [displayPasswordRecovery, switchdPasswordRecoveryDisplay] = useModal()
  const IMAGE_SIZE = '200px'
  const styles = {
    container: {
      background: '#FFF',
      boxShadow: '0px 4px 96px rgba(10, 9, 75, 0.21)',
      borderRadius: '15px',
      width: 1000
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
              name='email'
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
              label='????????????'
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
              ??????????
            </Typography>
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='text' onClick={switchdPasswordRecoveryDisplay}>
              <Typography variant='underlined'>
                ???????????? ?????????????
              </Typography>
            </Button>
            <Modal isShowing={displayPasswordRecovery} switchDisplay={switchdPasswordRecoveryDisplay}>
              <PasswordRecovery />
            </Modal>
            <Button variant='text' onClick={switchSignInDisplay}>
              <Typography variant='underlined'>
                ??????????????????????
              </Typography>
            </Button>
            <Modal isShowing={displaySignIn} switchDisplay={switchSignInDisplay}>
              <SignIn />
            </Modal>
          </Box>
        </Stack>
      </form>
    </Container>
  )
}

export default LogIn