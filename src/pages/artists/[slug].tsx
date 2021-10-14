import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'

export default function ArtistSlugPage() {
  const url = `/artists/slug`
  const title = 'Artist Name'

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
    </Layout>
  )
}
