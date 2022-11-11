import Head from "next/head";



const Header = () =>{
    return(
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Ajit's Homepage"/>
      <meta name="author" content="Ajit Yadav" />
      <meta name="author" content="mr-internetix" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mr_internetix" />
      <meta name="twitter:creator" content="@mr_internetix" />
      <meta name="twitter:image" content="/images/profile-pic.png" />
      <meta property="og:site_name" content="Ajit Yadav's Homepage" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/profile-pic.png" />
      <title> Mr Internetix - Homepage </title> 
        </Head>
    )
}



export default Header;