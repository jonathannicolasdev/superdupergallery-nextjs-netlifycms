import { styled } from '../../stitches.config'

export const Hero = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  margin: '25px 0',
  '@desktop': {
    margin: '75px 0',
  },
})

export const HeroCenter = styled('div', {
  margin: '1em 0',
})

export default Hero
