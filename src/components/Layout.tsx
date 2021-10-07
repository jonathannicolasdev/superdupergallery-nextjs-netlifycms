import Head from 'next/head'

import { styled } from '../../stitches.config'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Page = styled('div', {
  color: 'white',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  alignItems: 'center',
  padding: '1em',
})

const Main = styled('main', {
  flex: 1,
  width: '100%',
})

export default function Layout({ children }: Props) {
  return (
    <Page className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  )
}
