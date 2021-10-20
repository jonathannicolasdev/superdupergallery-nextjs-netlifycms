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
  backgroundColor: 'white',
  borderRadius: '1em',
  width: '100%',
  height: '100px',
  '@desktop': {
    width: '300px',
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
    role: 'Role',
    avatarImageURL: '/images/jonathan-nicolas.jpg',
  },
  {
    slug: 'someone-a',
    name: 'Someone A',
    role: 'Role',
    avatarImageURL: '/images/someone-a.jpg',
  },
  {
    slug: 'someone-b',
    name: 'Someone B',
    role: 'Role',
    avatarImageURL: '/images/someone-b.jpg',
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
