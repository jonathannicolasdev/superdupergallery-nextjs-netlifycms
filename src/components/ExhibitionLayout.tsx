import BasicMeta from './meta/BasicMeta'
import JsonLdMeta from './meta/JsonLdMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'

import Layout from './Layout'
import Hero from './Hero'
import Date from './Date'
import { Article, ArticleHeading, Section } from './Content'
import { ArtistTags, ArtistTag } from './Artist'

type ExhibitionLayoutProps = {
  slug: string
  title: string
  date: Date
  coverImageURL?: string
  description?: string
  artists: string[]
  children: React.ReactNode
}

export default function ExhibitionLayout({
  title,
  date,
  slug,
  coverImageURL,
  description = '',
  artists,
  children,
}: ExhibitionLayoutProps) {
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

      <Hero>
        <img src={coverImageURL} alt={title} height={420} />
      </Hero>

      <Article>
        <Section>
          <ArticleHeading>{title}</ArticleHeading>
          <Date date={date} />
        </Section>

        <Section>
          <ArtistTags>
            {artists.map((item, index) => {
              const color = 'red'
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
    </Layout>
  )
}
