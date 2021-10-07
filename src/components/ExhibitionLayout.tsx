import BasicMeta from './meta/BasicMeta'
import JsonLdMeta from './meta/JsonLdMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'

import Layout from './Layout'
import Hero from './Hero'
import Date from './Date'

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
        <img src={coverImageURL} alt={title} height={300} />
      </Hero>

      <article>
        <div>
          <h1>{title}</h1>
          <div>
            <div>
              <Date date={date} />
            </div>
          </div>
        </div>

        <div>{children}</div>

        <ul>
          {artists.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}
