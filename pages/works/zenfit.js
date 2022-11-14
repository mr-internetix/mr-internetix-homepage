import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="File Sync">
    <Container mt={36}>
      <Title>
        Zenfit <Badge> Sept-2022</Badge>
      </Title>
      <P>
     A gym Management Portal For Managing gym Members With User Interface and Multi Vendor functionality 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://orca-app-oobog.ondigitalocean.app/" target='_blank'>
          https://orca-app-oobog.ondigitalocean.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cross Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express js , MongoDB , Ejs , Jwt, Twilio</span>
        </ListItem>
      </List>

      <WorkImage src="https://ik.imagekit.io/kv6tcjdna/gym.png" alt="Zenfit" />
      <WorkImage src="https://ik.imagekit.io/kv6tcjdna/gym2.png" alt="Zenfit" />
    </Container>
  </Layout>
)

export default Work