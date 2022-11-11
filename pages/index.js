import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'




export default function Home() {
  return (
    <Layout>
    <Container>
     

  {/* hero section */}
  <Box display={{ md: 'flex' }}  mt={{md:40 , base:10}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ajit Yadav
          </Heading>
          <p>Just A Nerd ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-pic.png"
            alt="Profile image"
          />
        </Box>
      </Box>

    {/* article section */}
    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who am I ?
        </Heading>
        <Paragraph>
          Ajit is a freelance and a full-stack developer based in India with a
          passion for building digital services/stuff he wants. 
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" legacyBehavior>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Uttar-Pradesh , India.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Bachelor&apos;s Program in Computer Science at Mumbai University
            </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="www.github.com/mr-internetix" target="_blank">
           Coding
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me on the web
        </Heading>
        <List>
          <ListItem>
           <Link href="https://github.com/mr-internetix" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @mr_internetix
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/mr_internetix" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @mr_internetix
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mr_internetix" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @mr-internetix
              </Button>
            </Link>
          </ListItem>
        </List>


        <Box align="center" my={4}>
          <NextLink href="/works" legacyBehavior>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
             My Works 
            </Button>
          </NextLink>
        </Box>
      </Section>

  </Container>
  </Layout>
  );
}

