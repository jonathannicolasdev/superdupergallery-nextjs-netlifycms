import styles from '../../public/styles/content.module.css'

import Copyright from './Copyright'
import Date from './Date'
import Layout from './Layout'
import BasicMeta from './meta/BasicMeta'
import JsonLdMeta from './meta/JsonLdMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'
import { SocialList } from './SocialList'
import TagButton from './TagButton'

import { getTag } from '../lib/tags'

type Props = {
  title: string
  date: Date
  slug: string
  artists: string[]
  description?: string
  children: React.ReactNode
}
export default function ExhibitionLayout({
  title,
  date,
  slug,
  description = '',
  artists,
  children,
}: Props) {
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

      <div>
        <article>
          <header>
            <h1>{title}</h1>
            <div>
              <div>
                <Date date={date} />
              </div>
            </div>
          </header>
          <div>{children}</div>
          <ul>
            {artists.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </Layout>
  )
}
