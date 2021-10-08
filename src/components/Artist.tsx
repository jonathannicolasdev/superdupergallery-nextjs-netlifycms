import { AnySrvRecord } from 'dns'
import { styled } from '../../stitches.config'

export const ArtistTags = ({ children }) => {
  const Tags = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1rem',
  })

  return <Tags>{children}</Tags>
}

type ArtistTagProps = {
  color?: any
  children: React.ReactNode
}

const Tag = styled('div', {
  color: 'white',
  padding: '0.5em',
  margin: '0.25em',
  border: '2px solid white',
  variants: {
    color: {
      white: { borderColor: 'white' },
      red: { borderColor: 'red' },
      orange: { borderColor: 'orange' },
      yellow: { borderColor: 'yellow' },
      green: { borderColor: 'green' },
      blue: { borderColor: 'blue' },
      purple: { borderColor: 'purple' },
      pink: { borderColor: 'pink' },
    },
  },
})

export const ArtistTag = ({ color, children }: ArtistTagProps) => {
  return <Tag color={color}>{children}</Tag>
}
