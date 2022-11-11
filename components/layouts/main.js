import { Box , Container, Heading} from '@chakra-ui/react';
import dynamic from 'next/dynamic'
import Header from '../head'
import Navbar from '../navbar'
import Footer from '../footer';
import LostProgrammerLoader from '../lost-programmer-loader'


const LostProgrammer = dynamic(() => import('../lost-programmer'), {
  ssr: false,
  loading: () => <LostProgrammerLoader />
})

 const Main = ({children , router })=>{

    return(
            <Box as="main" pb={8}>
                <Header/>
                <Navbar/>
                <Container maxW="container.md" pt={14}>
                <LostProgrammer />
                    {children}
                </Container>
                
            </Box>
    )
}



export default Main