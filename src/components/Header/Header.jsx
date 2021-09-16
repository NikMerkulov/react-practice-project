import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'

const ButtonAppBar = () => {
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
        <Button href='/login' color="inherit" sx={{ ml: 'auto' }}>
          <Typography variant='p' fontSize={18}>
            Войти
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar