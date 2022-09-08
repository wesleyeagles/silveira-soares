import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


const theme = extendTheme({
  colors: {
    brand: {
      'red': '#A80000',
      'gray': '#5D5D5D'
    },

    fonts: {
        'volkhov': 'Volkhov',
        'inter': 'Inter',
    }
  },
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>

  </React.StrictMode>
)
