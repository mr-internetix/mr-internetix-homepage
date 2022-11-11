import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'



const LogoBox = styled.span`font-weight: bold;
   font-size: 28px;
    display: inline-flex;
   align-items: center;
   line-height: 20px;
   text-align:center;
  padding: 10px;
  margin-bottom:10px;
  cursor : pointer;
  letter-spacing : 0.2px;
   img {                                                                      
     transition: 200ms ease;
     border-radius:50%
    }                   
  
    &:hover img {
 transform: rotate(20deg);   }`




const Logo = () =>{
  const profileImg = `/images/profile-pic.png`
  return (
   <Link href="/" legacyBehavior>

     <LogoBox>

     {/* <Image src={profileImg} width={25} height={25}  alt="logo" /> */}
     <Text
     color={useColorModeValue('gray.800','whiteAlpha.900')}
     fontFamily='Roboto , sans-serif'
     fontWeight="bold"
     alignItems="center"
     justifyContent="center"
     ml={3}
     > Mr Internetix
     </Text>
     </LogoBox>

    </Link>
  ); 
}

export default Logo
