import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document{ 
    render() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet"/>        
         <meta name="description" content="AG photography's Portfolio website" />
         <link rel="icon" href="/AG-PNG.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}}