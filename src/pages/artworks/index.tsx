import { GetStaticProps } from 'next'

import config from '../../lib/config'
import {
  countArtworks,
  listArtworkContent,
  ArtworkContent,
} from '../../lib/artworks'

import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'

import Hero from '../../components/Hero'
import AnimatedHeading from '../../components/AnimatedHeading'
import ArtworkList from '../../components/ArtworkList'
import { Center } from '../../components/Content'

type Props = {
  artworks: ArtworkContent[]
  pagination: {
    current: number
    pages: number
  }
}

export default function ArtworksPage({ artworks, pagination }: Props) {
  const url = '/artworks'
  const title = 'All artworks'

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />

      <Hero>
        <AnimatedHeading sentence="Super Artworks for Your Eyes" />
      </Hero>

      <Center>
        <ArtworkList artworks={artworks} pagination={pagination} />
      </Center>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const artworks = listArtworkContent(1, config.artworks_per_page)
  const pagination = {
    current: 1,
    pages: Math.ceil(countArtworks() / config.artworks_per_page),
  }
  return {
    props: {
      artworks,
      pagination,
    },
  }
}
