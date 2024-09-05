import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

const theme = createTheme({
  //typography: {
  //  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  //},
  //palette: {
  //  primary: {
  //    main: '#1976d2',
  //  },
  //},
  components: {
    MuiCssBaseline: {
      //styleOverrides: {
      //  body: {
      //    margin: 0,
      //    padding: 0,
      //    boxSizing: 'border-box',
      //    fontSmoothing: 'antialiased',
      //  },
      //},
    },
  },
})

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>,
  )
}
