import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'

import Hero from '../../components/Hero'
import AnimatedHeading from '../../components/AnimatedHeading'
import ArtistList from '../../components/ArtistList'
import { Center } from '../../components/Content'

import config from '../../lib/config'
import { ArtistContent, listArtists } from '../../lib/artists'

type Props = {
  artists: ArtistContent[]
}

export default function ArtistsPage({ artists }: Props) {
  const url = `/artists`
  const title = 'Artists'

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />

      <Hero>
        <AnimatedHeading sentence="The Amazing Artists" />
      </Hero>

      <Center>
        <ArtistList artists={artists} />
      </Center>
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
