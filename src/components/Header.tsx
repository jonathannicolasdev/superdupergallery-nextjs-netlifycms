import NextHead from 'next/head'
import { styled } from '../../stitches.config'

const HeaderContainer = styled('header', {
  width: '100%',
  border: '2px solid white',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const HeaderSegment = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const HeaderDivider = styled('div', {
  borderTop: '2px solid white',
  '@desktop': {
    borderWidth: '0 2px 0 2px',
    borderStyle: 'solid',
    borderColor: 'white',
    height: '120px',
    flex: 1,
  },
})

const Logo = styled('img', {
  width: '80px',
  height: '80px',
  '@desktop': {
    width: '120px',
    height: '120px',
  },
})

const Tagline = styled('h2', {
  color: 'white',
  fontSize: '1.2em',
  padding: '20px',
})

const MenuButton = styled('button', {
  background: 'black',
  border: '2px solid white',
  borderRadius: '1em',
  margin: '0.5em',
  padding: '0.5em',
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  '@desktop': {
    margin: '1em',
    padding: '1em',
  },
})

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderSegment>
        <Logo src="/images/superdupergallery-avatar.jpg" alt="Avatar" />
      </HeaderSegment>
      <HeaderDivider />
      <HeaderSegment>
        <Tagline>
          Contemporary Art Gallery <br /> based in 🇵🇭 QC, Philippines
        </Tagline>
      </HeaderSegment>
      <HeaderDivider />
      <HeaderSegment>
        <MenuButton>Menu</MenuButton>
      </HeaderSegment>
    </HeaderContainer>
  )
}
