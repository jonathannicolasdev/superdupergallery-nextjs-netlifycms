import NextLink from 'next/link'
import { parseISO } from 'date-fns'
import { styled } from '../../stitches.config'

import Pagination from './Pagination'
import Date from './Date'

import { ExhibitionContent } from '../lib/exhibitions'

type ExhibitionListProps = {
  exhibitions: ExhibitionContent[]
  pagination: {
    current: number
    pages: number
  }
}

type ExhibitionItemProps = {
  exhibition: ExhibitionContent
}

const ExhibitionCollection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export default function ExhibitionList({
  exhibitions,
  pagination,
}: ExhibitionListProps) {
  const ExhibitionListContainer = styled('div', {})

  return (
    <ExhibitionListContainer>
      <ExhibitionCollection>
        {exhibitions.map((item, index) => (
          <ExhibitionItem key={index} exhibition={item} />
        ))}
      </ExhibitionCollection>

      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) =>
            page === 1 ? '/exhibitions' : '/exhibitions/page/[page]',
          as: (page) => (page === 1 ? null : '/exhibitions/page/' + page),
        }}
      />
    </ExhibitionListContainer>
  )
}

export function ExhibitionItem({ exhibition }: ExhibitionItemProps) {
  const ExhibitionItemContainer = styled('article', {
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

  const ExhibitionItemImage = styled('img', {
    width: '100%',
  })

  const ExhibitionItemSection = styled('section', {
    maxWidth: '600px',
    '@desktop': {
      margin: '0 1em',
    },
  })

  const ExhibitionItemButton = styled('a', {
    cursor: 'pointer',
    color: 'white',
    border: '2px solid white',
    padding: '0.5em 1em',
    transition: 'all 0.25s ease-in-out',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  })

  return (
    <ExhibitionItemContainer>
      <ExhibitionItemSection>
        <ExhibitionItemImage
          src={exhibition.coverImageURL}
          alt={exhibition.title}
        />
      </ExhibitionItemSection>

      <ExhibitionItemSection>
        <h3>{exhibition.title}</h3>
        <Date date={parseISO(exhibition.date)} />
        <p>{exhibition.description}</p>
        <div>
          <NextLink href={'/exhibitions/' + exhibition.slug}>
            <ExhibitionItemButton>Enter</ExhibitionItemButton>
          </NextLink>
        </div>
      </ExhibitionItemSection>
    </ExhibitionItemContainer>
  )
}
