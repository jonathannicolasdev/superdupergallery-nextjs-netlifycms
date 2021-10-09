import BasicMeta from './meta/BasicMeta'
import JsonLdMeta from './meta/JsonLdMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'

import Layout from './Layout'
import Date from './Date'
import { Hero, HeroCenter } from './Hero'
import { Center, Article, ArticleHeading, Section } from './Content'
import { ArtistTag } from './Artist'
import { getArtist } from '../lib/artists'
import { styled } from '../../stitches.config'

type ArtworkLayoutProps = {
  slug: string
  title: string
  artist: string
  imageURL?: string
  date: Date
  children: React.ReactNode
}

const ArtworkImage = styled('img', {
  maxHeight: '500px',
})

export default function ArtworkLayout({
  slug,
  title,
  date,
  imageURL,
  artist,
  children,
}: ArtworkLayoutProps) {
  return (
    <Layout>
      <BasicMeta url={`/artworks/${slug}`} title={title} />
      <TwitterCardMeta url={`/posts/${slug}`} title={title} />
      <OpenGraphMeta url={`/posts/${slug}`} title={title} />
      <JsonLdMeta url={`/posts/${slug}`} title={title} date={date} />

      <Hero>
        <HeroCenter>
          <ArtworkImage src={imageURL} alt={title} />
        </HeroCenter>
      </Hero>

      <Center>
        <Article>
          <Section>
            <ArticleHeading>{title}</ArticleHeading>
            <ArtistTag>{getArtist(artist).name}</ArtistTag>
            <Date date={date} />
          </Section>

          <Section>{children}</Section>
        </Article>
      </Center>
    </Layout>
  )
}
