import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'
import TagPostList from '../../components/TagPostList'

import config from '../../lib/config'
import { ArtistContent, listArtists } from '../../lib/artists'

type Props = {
  artists: ArtistContent[]
  page?: string
  pagination?: {
    current: number
    pages: number
  }
}

export default function ArtistsPage({ artists, page, pagination }: Props) {
  const url = `/artists`
  const title = 'Artists'

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <p>{JSON.stringify(artists, null, 2)}</p>
      {/* <TagPostList posts={posts} tag={tag} pagination={pagination} /> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artists = listArtists()

  const props: {
    artists: ArtistContent[]
  } = { artists }

  // if (page) {
  //   props.page = page
  // }
  return {
    props,
  }
}
