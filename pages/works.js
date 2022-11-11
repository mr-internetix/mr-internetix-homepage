import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


// importing images for the worksd
import bookShelf from '../public/images/works/bookshelf.png'
import fileSync from '../public/images/works/filesync.png'
import rpcleaners from '../public/images/works/rpcleaners.png'


const Works = () => (
  
  <Layout title="works">
    <Container  mt={{md:40 , base:10}}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="fileSync" title="File-Sync" thumbnail={fileSync}>
            A Drive Platform that allows users to share files over internet 
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
            id="bookshelf"
            thumbnail={bookShelf}
            title="Book Shelf"
          >
            A platform which allows to post ads about books and allows users to see it
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>

)




export default Works
