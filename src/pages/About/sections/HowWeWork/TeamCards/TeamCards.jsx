import { teamData } from '../../../../../constants/AbotPageConstants/teamData'
import { TeamCard } from './TeamCard/Teamcard'
import { CardsContainer } from './TeamCards.styled'

const TeamCards = () => {
    return (
        <CardsContainer>
            {teamData.map((team, index) => (
                <TeamCard key={index} title={team.title} description={team.description} imageUrl={team.imageUrl} icon={team.icon} />
            ))}
        </CardsContainer>
    )
}

export default TeamCards
