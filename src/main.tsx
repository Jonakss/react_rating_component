import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// - White: hsl(0, 0%, 100%)
// - Light Grey: hsl(217, 12%, 63%)
// - Medium Grey: hsl(216, 12%, 54%)
// - Dark Blue: hsl(213, 19%, 18%)
// - Very Dark Blue: hsl(216, 12%, 8%)
// - Orange: hsl(25, 97%, 53%)

const breakpoints = {
  base: "0px",
  sm: "375px",
  md: "460px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  colors: {
    background: {
      base: "blue.very_dark",
    },
    primary: 'hsl(25, 97%, 53%)',
    grey: {
      ligth: 'hsl(217, 12%, 63%)',
      medium: 'hsl(216, 12%, 54%)'
    },
    blue: {
      dark: 'hsl(213, 19%, 18%)',
      very_dark: 'hsl(216, 12%, 8%)'
    }
  },
  breakpoints
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
