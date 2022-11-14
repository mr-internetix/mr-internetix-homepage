import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Qr Gen">
    <Container mt={36}>
      <Title>
        Qr Gen <Badge> Aug-2022</Badge>
      </Title>
      <P>
     A V-Card Qr Code Generator which helps to save contact Details by Scanning The Qr Code
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://vcard-qr-code.herokuapp.com/" target='_blank'>
          https://vcard-qr-code.herokuapp.com/<ExternalLinkIcon mx="2px" />
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

      <WorkImage src="https://ik.imagekit.io/kv6tcjdna/qrcode.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668395712543" alt="Qr gen" />
     
    </Container>
  </Layout>
)

export default Work

