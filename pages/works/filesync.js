import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="File Sync">
    <Container mt={36}>
      <Title>
        File Sync <Badge>Feb-2022</Badge>
      </Title>
      <P>
      File sharing web platform -- stores data and helps to share data over internet without any email also encrypt PDF with password
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://file-sync.herokuapp.com" target='_blank'>
          https://file-sync.herokuapp.com<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cross Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express js , MongoDB , Ejs , Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="https://ik.imagekit.io/kv6tcjdna/filesync.png" alt="file Sync" />
      <WorkImage src="https://ik.imagekit.io/kv6tcjdna/filesync2_zSU3j0Vbq" alt="file Sync" />
    </Container>
  </Layout>
)

export default Work