import NextLink from 'next/link'
import { parseISO } from 'date-fns'
import { styled } from '../../stitches.config'

import Pagination from './Pagination'
import Date from './Date'

import { ArtworkContent } from '../lib/artworks'
import { getArtist } from '../lib/artists'

type ArtworkListProps = {
  artworks: ArtworkContent[]
  pagination: {
    current: number
    pages: number
  }
}

type ArtworkItemProps = {
  artwork: ArtworkContent
}

const ArtworkListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '1200px',
  padding: '1em',
})

const ArtworkCollection = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',
})

const ArtworkItemContainer = styled('article', {
  display: 'flex',
  fontSize: '1.2rem',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0.5em',
  maxWidth: '250px',
  width: '100%',
  h3: {
    fontSize: '2rem',
  },
  '*': {
    display: 'block',
    marginBottom: '0.5em',
  },
})

const ArtworkItemImage = styled('img', {
  maxHeight: '300px',
  width: '100%',
})

const ArtworkItemSection = styled('section', {
  maxWidth: '300px',
  '@desktop': {
    margin: '0 1em',
  },
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

      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) => (page === 1 ? '/artworks' : '/artworks/page/[page]'),
          as: (page) => (page === 1 ? null : '/artworks/page/' + page),
        }}
      />
    </ArtworkListContainer>
  )
}

export function ArtworkItem({ artwork }: ArtworkItemProps) {
  return (
    <ArtworkItemContainer>
      <ArtworkItemSection>
        <ArtworkItemImage src={artwork.imageURL} alt={artwork.title} />
      </ArtworkItemSection>

      <ArtworkItemSection>
        <h3>{artwork.title}</h3>
        <h4>{getArtist(artwork.artist).name}</h4>
        <Date date={parseISO(artwork.date)} />
        <div>
          <NextLink href={'/artworks/' + artwork.slug} passHref>
            <ArtworkItemLinkButton>Details</ArtworkItemLinkButton>
          </NextLink>
        </div>
      </ArtworkItemSection>
    </ArtworkItemContainer>
  )
}
