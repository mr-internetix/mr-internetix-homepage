import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Book Shelf">
    <Container mt={36}>
      <Title>
        BookShelf <Badge> Sept-2021</Badge>
      </Title>
      <P>
    A book Selling platform Where Users can post Post Ad&apos;s and manage Them Through Dashboard
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bookshelf-app-68.herokuapp.com/" target='_blank'>
          https://bookshelf-app-68.herokuapp.com/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cross Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express js ,Ejs </span>
        </ListItem>
      </List>

      <WorkImage src="https://ik.imagekit.io/kv6tcjdna/bookshelf.png" alt="Qr gen" />
     
    </Container>
  </Layout>
)

export default Work

