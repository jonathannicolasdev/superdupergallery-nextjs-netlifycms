import NextHead from 'next/head'
import { styled } from '../../stitches.config'

import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'

const Page = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em',
})

const Header = styled('header', {
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

const Hero = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  margin: '75px 0',
})

const HeroCenter = styled('div', {})

const HeroHeading = styled('h1', {
  textTransform: 'uppercase',
  fontFamily: '"Titillium Web", sans-serif',
  lineHeight: '80%',
  fontWeight: 900,
  letterSpacing: 2,
  backgroundImage: 'url("/images/hero-text-background.jpg")',
  color: 'transparent',
  backgroundClip: 'text',
  filter: 'brightness(1.5)',
  '-webkit-text-stroke-width': '2px',
  '-webkit-text-stroke-color': 'white',
  fontSize: '4.5rem',
  '@desktop': {
    fontSize: '11.5rem',
  },
})

const Article = styled('article', {
  color: 'white',
  margin: '1em',
  padding: '1em 0',
  fontSize: '1.2rem',
  maxWidth: '720px',
})

const ArticleHeading = styled('h3', {
  textTransform: 'uppercase',
  fontWeight: 900,
  fontSize: '2rem',
  maxWidth: '24ch',
})

const Section = styled('section', {
  marginBottom: '1em',
  p: {
    marginBottom: '0.25em',
  },
})

export default function HomePage() {
  return (
    <Layout>
      <NextHead>
        <title>Super Duper Gallery</title>
      </NextHead>

      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />

      <Header>
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
      </Header>

      <Hero>
        <HeroCenter>
          <HeroHeading>
            Super
            <br />
            Duper
            <br />
            Gallery
          </HeroHeading>
        </HeroCenter>
      </Hero>

      <Article>
        <Section>
          <ArticleHeading>
            Super Duper Gallery offers a portal further beyond.
          </ArticleHeading>
        </Section>
        <Section>
          <p>
            It is a contemporary art gallery that welcomes a wide range of
            artistic provocations.
          </p>
          <p>
            Artists are given the opportunity to explore and creatively labor
            upon the energy that drives their limitless imagination.
          </p>
          <p>
            The gallery embraces a range of expressions and intentions, from
            serious to the unapologetically whimsical.
          </p>
        </Section>
        <Section>
          <p>
            Artists may freely choose the contemplative in challenging yet
            innovative ways or provide an occasional jesting commentary.
          </p>
          <p>
            They can also renegotiate ontologies of art and rethink parameters
            of validity in the market.
          </p>
        </Section>
        <Section>
          <p>
            Although it is physically located in Quezon City, the gallery offers
            a glimpse into the diverse contemporary art practices and media that
            artists have to offer regardless of ethnicity, nationality, and
            geographic borders.
          </p>
        </Section>
        <Section>
          <p>
            Super Duper is a contemporary art gallery that features carefully
            curated exhibitions that transcend conceptual boundaries,
            established trends, and cliques.
          </p>
          <p>
            The innovative program of exhibitions is reflective of the gallery’s
            dictum: ignore the compulsory and pursue the super duper.
          </p>
        </Section>
      </Article>
    </Layout>
  )
}
