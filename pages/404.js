import NextLink from 'next/link';

import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';


const NotFound = () => {
    return (
        <Container>
            <Heading as="h1"> Not Found </Heading>
            <Text> Looks Like You&apos;re Lost</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal"> Show Me The Sign</Button>
                </NextLink>

            </Box>
        </Container>
    )
}




export default NotFound