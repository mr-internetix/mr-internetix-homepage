import NextLink from 'next/link'
import { useEffect, useRef } from 'react'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import notfound from '../public/images/not-found.json'
import lottie from 'lottie-web/build/player/lottie_light'

const Notfound = () => {
  const ref = useRef()
  const isSecond = useRef(false)
  useEffect(() => {

    if(isSecond.current == false) {
      lottie.loadAnimation({
        container: ref.current,
        animationData: notfound,
        renderer: 'svg',
        loop: true,
        autoplay: true
      })

      return () => {
        isSecond.current = true
      }
    }
  }, [])

  return (
    <Container>
      <Box id="lottie-container" ref={ref}></Box>
    
      <Box align="center">
        <NextLink href="/" legacyBehavior>
          <Button colorScheme="green"> Back To Home</Button>
        </NextLink>
      </Box>
    </Container>
  );
}

export default Notfound
