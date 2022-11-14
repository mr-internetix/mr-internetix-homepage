import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rp cleaners">
    <Container mt={36}>
      <Title>
        Rp Cleaners <Badge> Dec-2021</Badge>
      </Title>
      <P>
   A Portfolio Website for  a local business
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.rpcleaners.in" target='_blank'>
          www.rpcleaners.in<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cross Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML , Css , Bootstrap , Javascript </span>
        </ListItem>
      </List>

      <WorkImage src="https://ik.imagekit.io/kv6tcjdna/rpcleaners_1_.png/tr:w-440,h-228" alt="Qr gen" />
     
    </Container>
  </Layout>
)

export default Work

