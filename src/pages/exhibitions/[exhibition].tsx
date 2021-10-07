import { GetStaticProps, GetStaticPaths } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'
import hydrate from 'next-mdx-remote/hydrate'

import { parseISO } from 'date-fns'
import matter from 'gray-matter'
import fs from 'fs'
import yaml from 'js-yaml'
import InstagramEmbed from 'react-instagram-embed'
import YouTube from 'react-youtube'

import { fetchExhibitionContent } from '../../lib/exhibitions'

import ExhibitionLayout from '../../components/ExhibitionLayout'
import Carousel from '../../components/Carousel'

const components = { Carousel, InstagramEmbed, YouTube }

const slugToExhibitionContent = ((exhibitionContents) => {
  let hash = {}
  exhibitionContents.forEach((item) => (hash[item.slug] = item))
  return hash
})(fetchExhibitionContent())

export type ExhibitionPageProps = {
  slug: string
  title: string
  dateString: string
  description?: string
  coverImageURL?: string
  carouselImageURLs?: string[]
  artists?: string[]
  source: MdxRemote.Source
}

export default function ExhibitionPage({
  title,
  dateString,
  slug,
  description = '',
  coverImageURL,
  carouselImageURLs = [],
  artists = [],
  source,
}: ExhibitionPageProps) {
  const content = hydrate(source, { components })
  return (
    <ExhibitionLayout
      slug={slug}
      title={title}
      date={parseISO(dateString)}
      description={description}
      coverImageURL={coverImageURL}
      carouselImageURLs={carouselImageURLs}
      artists={artists}
    >
      {content}
    </ExhibitionLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchExhibitionContent().map(
    (item) => '/exhibitions/' + item.slug
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.exhibition as string
  const source = fs.readFileSync(slugToExhibitionContent[slug].fullPath, 'utf8')
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  })
  const mdxSource = await renderToString(content, { components, scope: data })

  return {
    props: {
      slug: data.slug,
      title: data.title,
      dateString: data.date,
      description: data.description,
      coverImageURL: data.coverImageURL,
      carouselImageURLs: data.carouselImageURLs,
      artists: data.artists,
      source: mdxSource,
    },
  }
}
