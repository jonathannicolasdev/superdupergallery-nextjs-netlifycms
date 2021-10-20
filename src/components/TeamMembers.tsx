import { styled } from '../../stitches.config'

import { Center, Article, ArticleHeading, Section } from '../components/Content'

const TeamMembersSection = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& > *': {
    margin: '1em',
  },
})

const Person = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    marginBottom: '0.5em',
  },
})

const PersonAvatar = styled('img', {
  display: 'block',
  backgroundColor: '#111',
  borderRadius: '1em',
  maxWidth: '300px',
  width: '100%',
  '@desktop': {
    height: '300px',
  },
})

const PersonName = styled('h4', {
  fontSize: '2rem',
})

const PersonRole = styled('h5', {
  fontSize: '1.5rem',
})

const teamMembers = [
  {
    slug: 'jonathan-nicolas',
    name: 'Jonathan Nicolas',
    role: 'Co-Founder',
    avatarImageURL: '/avatars/jonathan-nicolas.png',
  },
  {
    slug: 'alfred-tababa',
    name: 'Alfred Tababa',
    role: 'Co-Founder',
    avatarImageURL: '/avatars/alfred-tababa.png',
  },
  {
    slug: 'jessa-almirol',
    name: 'Jessa Almirol',
    role: 'Co-Founder',
    avatarImageURL: '/avatars/jessa-almirol.png',
  },
]

const TeamMembers = () => {
  return (
    <Article id="team-members" size="wide">
      <Section align="center">
        <ArticleHeading>Our Team Members</ArticleHeading>
      </Section>
      <TeamMembersSection>
        {teamMembers.map((person) => {
          return (
            <Person key={person.slug}>
              <PersonAvatar src={person.avatarImageURL} alt={person.name} />
              <PersonName>{person.name}</PersonName>
              <PersonRole>{person.role}</PersonRole>
            </Person>
          )
        })}
      </TeamMembersSection>
    </Article>
  )
}

export default TeamMembers
