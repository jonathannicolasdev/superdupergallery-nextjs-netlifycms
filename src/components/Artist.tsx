import { styled } from '../../stitches.config'

export const ArtistTags = ({ children }) => {
  const Tags = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1rem',
  })

  return <Tags>{children}</Tags>
}

export const ArtistTag = ({ color, children }) => {
  const Tag = styled('div', {
    color: 'white',
    padding: '0.5em',
    margin: '0.25em',
    border: '2px solid white',
    variants: {
      color: {
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

  return <Tag color={color}>{children}</Tag>
}
