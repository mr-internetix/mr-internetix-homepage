import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


// importing images for the works
const  bookShelf = "https://ik.imagekit.io/kv6tcjdna/bookshelf.gif/tr:w-440,h-440"
const fileSync  = "https://ik.imagekit.io/kv6tcjdna/filesync.gif/tr:w-440,h-440"
const  rpcleaners = 'https://ik.imagekit.io/kv6tcjdna/rpcleaners_1_.png/tr:w-440,h-228'
const zenfit = "https://ik.imagekit.io/kv6tcjdna/zenfit.gif/tr:w-440,h-440"
const qrgen = "https://ik.imagekit.io/kv6tcjdna/qr-gen.gif/tr:w-440,h-440"

const Works = () => (
  
  <Layout title="works">
    <Container  mt={{md:40 , base:10}}>
      <Heading as="h3" fontSize={25} mb={4} textDecoration="underline" textUnderlineOffset="5px">
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="filesync" title="File-sync" thumbnail={fileSync}>
            A Drive Platform that allows users to share files over internet 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="zenfit" title="Zenfit" thumbnail={zenfit}>
            A Gym Management Platform with multi vendor functionality
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="qrgen" title="Qr Gen" thumbnail={qrgen}>
           A Qr Code Generator Platform
          </WorkGridItem>
        </Section>


        <Section>
          <WorkGridItem id="bookshelf" title="BookShelf" thumbnail={bookShelf}>
          A platform which allows to post book ads and sell them

          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>Collaborations</Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="rpcleaners"
            thumbnail={rpcleaners}
            title="Rp Cleaners"
          >
          A Portfolio website using Bootstrap 
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>

)




export default Works
