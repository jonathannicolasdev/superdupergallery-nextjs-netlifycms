import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'

import Hero from '../../components/Hero'
import AnimatedHeading from '../../components/AnimatedHeading'
import { Center } from '../../components/Content'
// import ArtistLayout from '../../components/ArtistLayout'

import { ArtistContent, listArtists, getArtist } from '../../lib/artists'
import { ArtworkContent, listArtworkContentByArtist } from '../../lib/artworks'

type Props = {
  artist: ArtistContent
  artworks: ArtworkContent[]
}

export default function ArtistSlugPage({ artist, artworks }: Props) {
  const url = `/artists/${artist.slug}`
  const title = artist.name

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />

      <Hero>
        <AnimatedHeading words={[artist.name]} />
      </Hero>

      <Center>
        <p>{JSON.stringify(artist, null, 2)}</p>
        <p>{JSON.stringify(artworks, null, 2)}</p>
      </Center>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string
  const artist = getArtist(slug)
  const artworks = listArtworkContentByArtist(artist)

  const props: {
    artist: ArtistContent
    artworks: ArtworkContent[]
  } = { artist, artworks }

  return {
    props,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const artists = listArtists()
  const paths = artists.map((artist) => '/artists/' + artist.slug)

  return {
    paths: paths,
    fallback: false,
  }
}
