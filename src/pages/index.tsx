import NextHead from 'next/head'
import { styled } from '../../stitches.config'

import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import Hero from '../components/Hero'

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
  marginBottom: '1.5em',
  p: {
    lineHeight: '150%',
    marginBottom: '0.75em',
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
            Super Duper Gallery offers a portal further beyond
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

      <Article>
        <Section>
          <ArticleHeading>Our Expertise</ArticleHeading>
        </Section>
        <Section>
          <p>
            The gallery offers facilities and services for solo and group
            exhibitions, artist exchanges, and other collateral activities.
          </p>
          <p>
            It has a team of artists with a wealth of experience in curation,
            exhibition design, marketing, and project management.
          </p>
          <p>
            The gallery serves as a platform for emerging and established
            artists from across and outside the archipelago.
          </p>
          <p>
            It is a node within a network of art institutions, collectives, and
            artworld stakeholders.
          </p>
          <p>
            Last but not the least, it is a haven and playground for artists who
            wish to experiment and even play.{' '}
          </p>
        </Section>
      </Article>
    </Layout>
  )
}
