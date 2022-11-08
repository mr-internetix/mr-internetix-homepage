import { Box , Container, Heading} from '@chakra-ui/react';
import Header from '../head'
import Navbar from '../navbar'
import Footer from '../footer';



 const Main = ({children , router })=>{

    return(
            <Box as="main" pb={8}>
                <Header/>
                <Navbar/>
                <Container maxW="container.md" pt={14}>
                    {children}
                <Footer/ >
                </Container>
                
            </Box>
    )
}



export default Main