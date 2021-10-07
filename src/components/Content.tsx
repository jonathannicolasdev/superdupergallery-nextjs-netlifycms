import { styled } from '../../stitches.config'

export const Article = styled('article', {
  color: 'white',
  margin: '1em 0',
  padding: '1em 0',
  fontSize: '1.2rem',
  maxWidth: '720px',
  p: {
    lineHeight: '150%',
    marginBottom: '1em',
  },
})

export const ArticleHeading = styled('h3', {
  textTransform: 'uppercase',
  fontWeight: 900,
  fontSize: '2rem',
  maxWidth: '24ch',
})

export const Section = styled('section', {
  marginBottom: '1.5em',
})
