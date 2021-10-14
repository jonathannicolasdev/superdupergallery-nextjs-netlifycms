import NextLink from 'next/link'
import { styled } from '../../stitches.config'

import { ArtistContent } from '../lib/artists'

type ArtistListProps = {
  artists: ArtistContent[]
}

const ArtistListContainer = styled('div', {
  maxWidth: '720px',
})

const ArtistCollection = styled('ul', {
  columnCount: 3,
  listStyle: 'none',
  fontSize: '1.2rem',
  a: {
    textDecoration: 'none',
    color: 'white',
    padding: '0.2em 0',
    border: '0px solid black',
    borderWidth: '5px 0',
    '&:hover': {
      borderBottom: '5px solid red',
    },
  },
})

const ArtistItem = styled('li', {
  marginBottom: '1em',
})

export default function ArtistList({ artists }: ArtistListProps) {
  return (
    <ArtistListContainer>
      <ArtistCollection>
        {artists.map((artist, index) => (
          <ArtistItem key={artist.slug}>
            <NextLink href={`/artists/${artist.slug}`}>
              <a>{artist.name}</a>
            </NextLink>
          </ArtistItem>
        ))}
      </ArtistCollection>
    </ArtistListContainer>
  )
}
