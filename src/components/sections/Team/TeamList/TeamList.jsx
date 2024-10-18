import { teamMembers } from '../../../../constants/teamMembers'
import TeamMember from './TeamListItem/TeamListItem'
import { StyledTemList } from './TeamList.styled'

const TeamList = () => {
    return (
        <StyledTemList>
            {teamMembers.map(member => (
                <TeamMember
                    key={member.id}
                    name={member.name}
                    position={member.position}
                    description={member.description}
                    imageUrl={member.imageUrl}
                />
            ))}
        </StyledTemList>
    )
}

export default TeamList
