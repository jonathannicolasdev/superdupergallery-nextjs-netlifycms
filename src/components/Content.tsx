import { styled } from '../../stitches.config'

export const Center = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Article = styled('article', {
  color: 'white',
  margin: '1em 0',
  padding: '1em 0',
  fontSize: '1.2rem',
  p: {
    lineHeight: '150%',
    marginBottom: '1em',
  },
  maxWidth: '720px',
  variants: {
    size: {
      wide: { maxWidth: '1080px' },
      compact: { maxWidth: '720px' },
    },
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
  variants: {
    align: {
      center: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
})

export const CoverImage = styled('img', {
  backgroundImage: 'url("/images/cover.jpeg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  // backgroundAttachment: 'fixed',
  width: '100%',
  height: '200px',
  '@desktop': {
    height: '600px',
  },
})
