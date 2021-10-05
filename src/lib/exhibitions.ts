import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import yaml from 'js-yaml'

const exhibitionsDirectory = path.join(process.cwd(), 'content/exhibitions')

export type ExhibitionContent = {
  readonly slug: string
  readonly title: string
  readonly date: string
  readonly coverImageURL: string
  readonly description: string
  readonly artists: string[]
  readonly fullPath: string
}

let exhibitionCache: ExhibitionContent[]

export function fetchExhibitionContent(): ExhibitionContent[] {
  if (exhibitionCache) {
    return exhibitionCache
  }
  // Get file names under /exhibitions
  const fileNames = fs.readdirSync(exhibitionsDirectory)
  const allExhibitionsData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(exhibitionsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the exhibition metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })
      const matterData = matterResult.data as {
        slug: string
        title: string
        date: string
        coverImageURL: string
        description: string
        artists: string[]
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

  // Sort exhibitions by date
  exhibitionCache = allExhibitionsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return exhibitionCache
}

export function countExhibitions(): number {
  return fetchExhibitionContent().length
}

export function listExhibitionContent(
  page: number,
  limit: number
): ExhibitionContent[] {
  return fetchExhibitionContent().slice((page - 1) * limit, page * limit)
}
