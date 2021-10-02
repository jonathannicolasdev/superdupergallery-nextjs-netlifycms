import Document, { Html, Head, Main, NextScript } from 'next/document'

import { globalCss, getCssText } from '../../stitches.config'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
})

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    globalStyles()

    const meta = {
      title: 'Super Duper Gallery',
      description: 'Amazing gallery in QC, Philippines',
      image:
        'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png',
    }

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourname" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@900&display=swap"
            rel="stylesheet"
          />

          <style jsx>
            {`
              body {
                background-color: black;
              }
            `}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
