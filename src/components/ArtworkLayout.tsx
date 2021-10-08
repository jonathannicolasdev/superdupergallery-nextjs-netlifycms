import BasicMeta from './meta/BasicMeta'
import JsonLdMeta from './meta/JsonLdMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'

import Layout from './Layout'
import Date from './Date'
import { HeroCenter } from './Hero'
import { Center, Article, ArticleHeading, Section } from './Content'
import { ArtistTag } from './Artist'
import { getArtist } from '../lib/artists'

type ArtworkLayoutProps = {
  slug: string
  title: string
  artist: string
  imageURL?: string
  date: Date
  children: React.ReactNode
}

export default function ArtworkLayout({
  slug,
  title,
  date,
  imageURL,
  artist,
  children,
}: ArtworkLayoutProps) {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

  return (
    <Layout>
      <BasicMeta url={`/artworks/${slug}`} title={title} />
      <TwitterCardMeta url={`/posts/${slug}`} title={title} />
      <OpenGraphMeta url={`/posts/${slug}`} title={title} />
      <JsonLdMeta url={`/posts/${slug}`} title={title} date={date} />

      <HeroCenter>
        <img src={imageURL} alt={title} />
      </HeroCenter>

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
