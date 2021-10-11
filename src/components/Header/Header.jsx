import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'
import LogIn from '../LogIn/LogIn'
import useModal from '../../Hooks/useModal'
import Modal from '../Modal/Modal'

const ButtonAppBar = () => {
  const [loginDisplay, switchLoginDisplay] = useModal()

  return (
    <AppBar position="static">
      <Toolbar >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div">
          Happy Little React App
        </Typography>
        <Button onClick={switchLoginDisplay} color="inherit" sx={{ ml: 'auto' }}>
          <Typography variant='p' fontSize={18}>
            Войти
          </Typography>
        </Button>
        <Modal isShowing={loginDisplay} switchDisplay={switchLoginDisplay}>
          <LogIn />
        </Modal>
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar