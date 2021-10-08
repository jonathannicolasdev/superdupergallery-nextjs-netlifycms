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

const ArtworkCollection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export default function ArtworkList({
  artworks,
  pagination,
}: ArtworkListProps) {
  const ArtworkListContainer = styled('div', {})

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
  const ArtworkItemContainer = styled('article', {
    display: 'flex',
    margin: '2em 0',
    fontSize: '1.2rem',
    maxWidth: '1000px',
    flexDirection: 'column',
    h3: {
      fontSize: '2rem',
    },
    '*': {
      display: 'block',
      marginBottom: '0.5em',
      '@desktop': {
        marginBottom: '1em',
      },
    },
    '@desktop': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })

  const ArtworkItemImage = styled('img', {
    width: '100%',
  })

  const ArtworkItemSection = styled('section', {
    maxWidth: '600px',
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
