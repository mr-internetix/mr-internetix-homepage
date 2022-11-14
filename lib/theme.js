import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


// #D8cce7 '#202023' #dacdff
const styles = {
  global: props => ({
    body: {
      bg: mode("#D8cce7", "#202023")(props),
     
    },

    "::-webkit-scrollbar":{
      display : "none"
    },

    "html":{
      scrollBehaviour: "smooth;"

    },

    "*":{
      p:{
        fontFamily:"Poppins",
        fontWeight:"Bolder"
      }
    },

  


    
    
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Roboto'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'false'
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme