import './App.css'
import { Box, Center, Grid } from '@chakra-ui/react'
import RatingPanel from './rating'



function App() {
  return (
    <Grid
      h='200px'
      templateRows='1fr auto'
      templateColumns='auto'
      gap={4}
      bgColor={'background'} 
      minH="100vh" 
      w={'100vw'} 
      justifyContent={'center'}>
      <Center>
        <RatingPanel />
      </Center>
      <Box py={'1rem'} as={'footer'} className="attribution" justifySelf={'flex-end'}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Jonakss">Jonathan Correa | Jonakss</a>.
      </Box>
    </Grid>
  )
}

export default App
