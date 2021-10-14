import NextLink from 'next/link'
import { parseISO } from 'date-fns'
import { styled } from '../../stitches.config'

import Pagination from './Pagination'
import Date from './Date'

import { ArtworkContent } from '../lib/artworks'
import { getArtist } from '../lib/artists'

type ArtworkListProps = {
  artworks: ArtworkContent[]
  pagination?: {
    current: number
    pages: number
  }
}

type ArtworkItemProps = {
  artwork: ArtworkContent
}

const ArtworkListContainer = styled('div', {})

const ArtworkCollection = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

const ArtworkItemContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '1.2rem',
  margin: '1em',
  maxWidth: '200px',
  height: '100%',
  '*': {
    display: 'block',
  },
})

const ArtworkItemImage = styled('img', {
  height: '100%',
  width: '100%',
})

const ArtworkItemSection = styled('section', {
  maxWidth: '300px',
  margin: '0.5em',
})

const ArtworkTitle = styled('h3', {
  fontSize: '1.5rem',
})

const ArtworkItemLinkButton = styled('a', {
  cursor: 'pointer',
  color: 'white',
  border: '2px solid white',
  padding: '0.5em 1em',
  transition: 'all 0.25s ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
})

const ArtistAnchor = styled('a', {
  color: 'white',
  textDecoration: 'none',
  paddingBottom: '2px',
  border: '0px solid black',
  borderWidth: '5px 0',
  '&:hover': {
    borderBottom: '5px solid red',
  },
})

export default function ArtworkList({
  artworks,
  pagination,
}: ArtworkListProps) {
  return (
    <ArtworkListContainer>
      <ArtworkCollection>
        {artworks.map((item, index) => (
          <ArtworkItem key={index} artwork={item} />
        ))}
      </ArtworkCollection>

      {pagination && (
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) =>
              page === 1 ? '/artworks' : '/artworks/page/[page]',
            as: (page) => (page === 1 ? null : '/artworks/page/' + page),
          }}
        />
      )}
    </ArtworkListContainer>
  )
}

export function ArtworkItem({ artwork }: ArtworkItemProps) {
  const artist = getArtist(artwork.artist)

  return (
    <ArtworkItemContainer>
      <ArtworkItemSection>
        <ArtworkItemImage src={artwork.imageURL} alt={artwork.title} />
      </ArtworkItemSection>

      <ArtworkItemSection>
        <ArtworkTitle>{artwork.title}</ArtworkTitle>
        <NextLink href={`/artists/${artist.slug}`} passHref>
          <ArtistAnchor>{artist.name}</ArtistAnchor>
        </NextLink>
        <Date date={parseISO(artwork.date)} />
      </ArtworkItemSection>

      <ArtworkItemSection>
        <NextLink href={'/artworks/' + artwork.slug} passHref>
          <ArtworkItemLinkButton>Details</ArtworkItemLinkButton>
        </NextLink>
      </ArtworkItemSection>
    </ArtworkItemContainer>
  )
}
