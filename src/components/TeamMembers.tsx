import { styled } from '../../stitches.config'

const TeamMembersContainer = styled('article', {
  display: 'flex',
  flexWrap: 'wrap',
  '& > *': {
    margin: '0 1em',
  },
})

const Person = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '*': {
    marginBottom: '1em',
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
    <TeamMembersContainer>
      {teamMembers.map((person) => {
        return (
          <Person key={person.slug}>
            <PersonAvatar src={person.avatarImageURL} alt={person.name} />
            <PersonName>{person.name}</PersonName>
          </Person>
        )
      })}
    </TeamMembersContainer>
  )
}

export default TeamMembers
