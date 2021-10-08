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

import { fetchArtworkContent } from '../../lib/artworks'

import ArtworkLayout from '../../components/ArtworkLayout'
import Carousel from '../../components/Carousel'

const components = { Carousel, InstagramEmbed, YouTube }

const slugToArtworkContent = ((artworkContents) => {
  let hash = {}
  artworkContents.forEach((item) => (hash[item.slug] = item))
  return hash
})(fetchArtworkContent())

export type ArtworkPageProps = {
  slug: string
  title: string
  artist: string
  imageURL?: string
  dateString: string
  source: MdxRemote.Source
}

export default function ArtworkPage({
  slug,
  title,
  artist,
  imageURL,
  dateString,
  source,
}: ArtworkPageProps) {
  const content = hydrate(source, { components })
  return (
    <ArtworkLayout
      slug={slug}
      title={title}
      artist={artist}
      imageURL={imageURL}
      date={parseISO(dateString)}
    >
      {content}
    </ArtworkLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchArtworkContent().map((item) => '/artworks/' + item.slug)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.artwork as string
  const source = fs.readFileSync(slugToArtworkContent[slug].fullPath, 'utf8')
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
      imageURL: data?.imageURL ?? '',
      artist: data.artist,
      source: mdxSource,
    },
  }
}
