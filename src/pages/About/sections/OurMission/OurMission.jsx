import Container from '../../../../components/Container/Container'
import SecondaryTitleAboutPage from '../../components/SecondaryTitleAboutPage/SecondaryTitleAboutPage'
import { StyledOurMission, Text } from './OurMission.styled'

const OurMission = () => {
    return (
        <StyledOurMission>
            <Container>
                <div>
                    <SecondaryTitleAboutPage>Our Mission 🚀</SecondaryTitleAboutPage>
                    <Text>
                        Our mission is clear: to democratize the gaming crypto industry, making it accessible to everyone. We believe that
                        anyone should have the chance to earn money while doing what they love-playing games. Through blockchain technology
                        and cryptocurrencies, we’re building a new ecosystem where in-game achievements have real value, allowing players to
                        thrive in both virtual and real-world economies.
                    </Text>
                </div>
            </Container>
        </StyledOurMission>
    )
}

export default OurMission
