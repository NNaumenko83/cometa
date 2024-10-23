import Container from '../../../../components/Container/Container'
import SecondaryTitleAboutPage from '../../components/SecondaryTitleAboutPage/SecondaryTitleAboutPage'
import { StyledHowWeWork, Text, ContentWrapper } from './HowWeWork.styled'
import TeamCards from './TeamCards/TeamCards'

const HowWeWork = () => {
    return (
        <StyledHowWeWork>
            <Container>
                <ContentWrapper>
                    <div>
                        <SecondaryTitleAboutPage>How We Work: Inside Comet Space</SecondaryTitleAboutPage>
                        <Text>
                            At Comet Space, collaboration and innovation are at the core of everything we do. Our teams are made up of
                            specialists from various fields, all working together towards a common goal: to create innovative, immersive,
                            and rewarding digital experiences. Our team members-from developers to artists to marketers, work together
                            seamlessly, bringing our ambitious projects to life. Each day is filled with problem-solving, brainstorming, and
                            a shared passion for creating groundbreaking experiences. Below, you’ll see our team in action, capturing the
                            energy, focus, and teamwork that make Comet Space what it is.
                        </Text>
                    </div>
                    <div>
                        <TeamCards />
                    </div>
                </ContentWrapper>
            </Container>
        </StyledHowWeWork>
    )
}

export default HowWeWork
