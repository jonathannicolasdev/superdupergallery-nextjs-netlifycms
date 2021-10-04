import Head from 'next/head'

import { styled } from '../../stitches.config'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Page = styled('main', {
  color: 'white',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em',
})

export default function Layout({ children }: Props) {
  return (
    <Page className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      {children}
      <Footer />
    </Page>
  )
}
