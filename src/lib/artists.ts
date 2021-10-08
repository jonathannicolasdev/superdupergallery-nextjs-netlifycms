import artists from '../../meta/artists.yml'

export type ArtistContent = {
  readonly slug: string
  readonly name: string
  readonly introduction: string
}

const artistMap: { [key: string]: ArtistContent } = generateArtistMap()

function generateArtistMap(): { [key: string]: ArtistContent } {
  let result: { [key: string]: ArtistContent } = {}
  for (const artist of artists.artists) {
    result[artist.slug] = artist
  }
  return result
}

export function getArtist(slug: string) {
  return artistMap[slug]
}
