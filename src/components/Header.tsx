import NextLink from 'next/link'

import { styled } from '../../stitches.config'

import Logo from './Logo'

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

const Tagline = styled('h2', {
  color: 'white',
  fontSize: '1.2em',
  padding: '20px',
})

const Navigation = styled('nav', {
  display: 'flex',
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 900,
  a: {
    letterSpacing: '1px',
    margin: '0 1em',
    color: 'white',
    textDecoration: 'none',
  },
})

const NavigationLink = styled('a', {
  cursor: 'pointer',
  padding: '0.5em',
  borderBottom: '5px solid black',
  '&:hover': {
    borderBottom: '5px solid red',
  },
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

const navigationLinks = [
  { href: '/about', text: 'About' },
  { href: '/exhibitions', text: 'Exhibitions' },
  { href: '/artworks', text: 'Artworks' },
  { href: '/artists', text: 'Artists' },
  { href: '/contact', text: 'Contact' },
]

export default function Header() {
  return <HeaderDesktop />
}

const HeaderDesktop = () => {
  return (
    <HeaderContainer>
      <HeaderSegment>
        <Logo />
      </HeaderSegment>
      <HeaderSegment>
        <Tagline>
          Contemporary Art Gallery <br /> based in 🇵🇭 QC, Philippines
        </Tagline>
      </HeaderSegment>

      <HeaderDivider />

      <HeaderSegment>
        <Navigation>
          {navigationLinks.map((navLink, index) => {
            return (
              <NextLink key={navLink.text} href={navLink.href}>
                <NavigationLink>{navLink.text}</NavigationLink>
              </NextLink>
            )
          })}
        </Navigation>
      </HeaderSegment>
    </HeaderContainer>
  )
}

const HeaderMobile = () => {
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
