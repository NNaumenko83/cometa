import Container from '../../../../components/Container/Container'
import {
    StyledHero,
    HeroContentWrapper,
    HeroLogoWrapper,
    HeroTitleWrapper,
    CometaLogoImg,
    HeroTitle,
    HeroTitleMainPart,
    HeroTitleMSecondaryPart,
} from './Hero.styled'
import CometaLogo from '../../../../assets/images/HeroLogo.png'

const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <HeroContentWrapper>
                    <HeroLogoWrapper>
                        <CometaLogoImg src={CometaLogo} alt="Logo" width={488} />
                    </HeroLogoWrapper>
                    <HeroTitleWrapper>
                        <HeroTitle>
                            <HeroTitleMainPart>cometa SPACE</HeroTitleMainPart>
                            <HeroTitleMSecondaryPart>GameDev Studio</HeroTitleMSecondaryPart>
                        </HeroTitle>
                    </HeroTitleWrapper>
                </HeroContentWrapper>
            </Container>
        </StyledHero>
    )
}

export default Hero
