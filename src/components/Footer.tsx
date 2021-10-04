import NextLink from 'next/link'

import { styled } from '../../stitches.config'

import Logo from './Logo'

const FooterContainer = styled('footer', {
  width: '100%',
  border: '2px solid white',
  minHeight: '100px',
  display: 'flex',
  flexDirection: 'column',
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const FooterSegment = styled('div', {
  margin: '0 1em',
})

const AddressAnchor = styled('a', {
  display: 'block',
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none',
  padding: '0.5em',
  borderBottom: '5px solid black',
  fontSize: '1.5rem',
  '&:hover': {
    borderBottom: '5px solid red',
  },
})

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSegment>
        <Logo />
      </FooterSegment>
      <FooterSegment>
        <AddressAnchor
          href="https://goo.gl/maps/NGtoAsrkYFCH1cud8"
          target="_blank"
        >
          <address>
            8 11th Jamboree, Diliman,
            <br />
            Quezon City, 1103 Metro Manila
            <br />
            Philippines
          </address>
        </AddressAnchor>
      </FooterSegment>
      <FooterSegment>
        <p>&copy; Super Duper Gallery</p>
      </FooterSegment>
    </FooterContainer>
  )
}
