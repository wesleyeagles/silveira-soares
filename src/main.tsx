import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import '@fontsource/open-sans/700.css'

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}


const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      'red': '#A80000',
      'hover.red': '#d00404',
      'gray': '#5D5D5D'
    },
  },
})

import styled from "@emotion/styled";

const AppContainer = styled.div`
  font-family: "Open Sans";
`;


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <AppContainer>
    <App />
    </AppContainer>
    </ChakraProvider>
    </BrowserRouter>

  </React.StrictMode>
)
