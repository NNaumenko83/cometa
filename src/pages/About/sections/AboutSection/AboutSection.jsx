import Container from '../../../../components/Container/Container'
import { welcomeTextPhoto } from '../../../../constants/AbotPageConstants/WelcomeTextPhoto'
import Info from '../../components/Info/Info'
import SecondaryTitleAboutPage from '../../components/SecondaryTitleAboutPage/SecondaryTitleAboutPage'
import { StyledAbout, Text, TitleWrapper, StyledTriangleImg } from './AboutSection.styled'
import TriangleImg from '../../../../assets/images/AboutPage/TriangleLeft.png'

const AboutSection = () => {
    return (
        <StyledAbout>
            <Container>
                <TitleWrapper>
                    <SecondaryTitleAboutPage>About Cometa Space:</SecondaryTitleAboutPage>
                    <Text>When Gaming Meets... Crypto, Al, Technologies and the best Professionals</Text>
                </TitleWrapper>
            </Container>
            <Info
                imgUrl={welcomeTextPhoto.imgUrl}
                title={welcomeTextPhoto.title}
                text={welcomeTextPhoto.text}
                imgPosition={welcomeTextPhoto.imgPosition}
                imageWidthDesktop={welcomeTextPhoto.imageWidthDesktop}
            />
            <StyledTriangleImg src={TriangleImg} alt="Triangle" width={54} />
        </StyledAbout>
    )
}

export default AboutSection
