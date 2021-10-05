import Link from 'next/link'
import { parseISO } from 'date-fns'

import Pagination from './Pagination'
import Date from './Date'

import { ExhibitionContent } from '../lib/exhibitions'

type ExhibitionItemProps = {
  exhibition: ExhibitionContent
}

export function ExhibitionItem({ exhibition }: ExhibitionItemProps) {
  return (
    <Link href={'/exhibitions/' + exhibition.slug}>
      <a>
        <Date date={parseISO(exhibition.date)} />
        <h2>{exhibition.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  )
}

type ExhibitionListProps = {
  exhibitions: ExhibitionContent[]
  pagination: {
    current: number
    pages: number
  }
}

export default function ExhibitionList({
  exhibitions,
  pagination,
}: ExhibitionListProps) {
  return (
    <div>
      <div>
        <ul>
          {exhibitions.map((it, i) => (
            <li key={i}>
              <ExhibitionItem exhibition={it} />
            </li>
          ))}
        </ul>

        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) =>
              page === 1 ? '/exhibitions' : '/exhibitions/page/[page]',
            as: (page) => (page === 1 ? null : '/exhibitions/page/' + page),
          }}
        />
      </div>
    </div>
  )
}
