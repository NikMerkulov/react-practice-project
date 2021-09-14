import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './redux/configureStore'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  spacing: [30, 40, 50],
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)