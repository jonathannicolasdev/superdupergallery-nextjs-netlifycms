import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import yaml from 'js-yaml'

const artworksDirectory = path.join(process.cwd(), 'content/artworks')

export type ArtworkContent = {
  readonly slug: string
  readonly title: string
  readonly artist: string
  readonly imageURL: string
  readonly date: string
  readonly fullPath: string
}

let artworkCache: ArtworkContent[]

export function fetchArtworkContent(): ArtworkContent[] {
  if (artworkCache) {
    return artworkCache
  }
  // Get file names under /artworks
  const fileNames = fs.readdirSync(artworksDirectory)
  const allArtworksData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(artworksDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the artwork metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })
      const matterData = matterResult.data as {
        slug: string
        title: string
        artist: string
        imageURL: string
        date: string
        fullPath: string
      }
      matterData.fullPath = fullPath

      const slug = fileName.replace(/\.mdx$/, '')

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          'slug field not match with the path of its content source'
        )
      }

      return matterData
    })

  // Sort artworks by date
  artworkCache = allArtworksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return artworkCache
}

export function countArtworks(): number {
  return fetchArtworkContent().length
}

export function listArtworkContent(
  page: number,
  limit: number
): ArtworkContent[] {
  return fetchArtworkContent().slice((page - 1) * limit, page * limit)
}
