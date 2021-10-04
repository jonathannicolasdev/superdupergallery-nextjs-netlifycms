import { styled } from '../../stitches.config'

const LogoImage = styled('img', {
  width: '80px',
  height: '80px',
  '@desktop': {
    width: '120px',
    height: '120px',
  },
})

export default function Logo() {
  return <LogoImage src="/images/superdupergallery-avatar.jpg" alt="Logo" />
}
