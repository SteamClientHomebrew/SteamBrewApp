import { Html, Head, Main, NextScript } from 'next/document'
 
export const metadata = {
  icon: 'https://i.imgur.com/9qYPFSA.png'
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://i.imgur.com/9qYPFSA.png" type="image/x-icon" sizes="16x16"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}