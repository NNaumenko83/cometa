import SharedLink from '../../SharedLink/SharedLink'
import Container from '../../Container/Container'
import SectionTitle from '../../SectionTitle/SectionTitle'
import { StyledTeam, ContentWrapper, BottomButtonText, ButtontextWrapper } from './Team.styled'
import TeamList from './TeamList/TeamList'

const Team = () => (
    <StyledTeam>
        <Container>
            <ContentWrapper>
                <SectionTitle>team space</SectionTitle>
                <TeamList />
                <ButtontextWrapper>
                    <SharedLink>Let`s</SharedLink>
                    <BottomButtonText>Let`s get to know each other</BottomButtonText>
                </ButtontextWrapper>
            </ContentWrapper>
        </Container>
    </StyledTeam>
)

export default Team
