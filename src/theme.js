import React from 'react'
import { createTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <Link ref={ref} to={href} {...other} />;
})

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'unset'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '8px 16px'
        }
      }
    }
  }
})

export default theme