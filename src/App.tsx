import './App.css'
import { Box, Center, Flex, Grid } from '@chakra-ui/react'
import RatingPanel from './rating'

function App() {
  return (
    <Grid
      templateRows='1fr'
      templateColumns='auto'
      gap={4}
      bgColor={'background'} 
      minH="100vh" 
      minW={'375px'}
      w={'100vw'} 
      justifyContent={'center'}
      alignItems={'center'}
      >
      <Center as='main'>
        <RatingPanel />
      </Center>
      <Flex py={'1rem'} as={'footer'} className="attribution" alignItems={'center'} justifySelf={'center'} direction={{base: 'column', md: 'row'}} gap={2} position={'absolute'} bottom={0}>
        <Box>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</Box>
        <Box>Coded by <a href="https://github.com/Jonakss">Jonathan Correa | Jonakss</a>.</Box>
      </Flex>
    </Grid>
  )
}

export default App
