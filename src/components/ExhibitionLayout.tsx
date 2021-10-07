import BasicMeta from './meta/BasicMeta'
import JsonLdMeta from './meta/JsonLdMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'

import Layout from './Layout'
import Date from './Date'
import { HeroCenter } from './Hero'
import { Center, Article, ArticleHeading, Section } from './Content'
import { ArtistTags, ArtistTag } from './Artist'
import Carousel from './Carousel'

type ExhibitionLayoutProps = {
  slug: string
  title: string
  date: Date
  description?: string
  coverImageURL?: string
  carouselImageURLs?: string[]
  artists: string[]
  children: React.ReactNode
}

export default function ExhibitionLayout({
  title,
  date,
  slug,
  coverImageURL,
  carouselImageURLs,
  description = '',
  artists,
  children,
}: ExhibitionLayoutProps) {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

  return (
    <Layout>
      <BasicMeta
        url={`/exhibitions/${slug}`}
        title={title}
        keywords={artists}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={artists}
        date={date}
        description={description}
      />

      <HeroCenter>
        <Carousel images={carouselImageURLs} />
      </HeroCenter>

      <Center>
        <Article>
          <Section>
            <ArticleHeading>{title}</ArticleHeading>
            <Date date={date} />
          </Section>

          <Section>
            <ArtistTags>
              {artists.map((item, index) => {
                const value = Math.floor(Math.random() * colors.length - 1)
                const color = colors[value]

                return (
                  <ArtistTag key={index} color={color}>
                    {item}
                  </ArtistTag>
                )
              })}
            </ArtistTags>
          </Section>

          <Section>{children}</Section>
        </Article>
      </Center>
    </Layout>
  )
}
