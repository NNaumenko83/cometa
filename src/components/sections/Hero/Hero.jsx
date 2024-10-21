import { memo } from 'react'
import { StyledHero, CometaImg, CometaLogoImg, LogoWrapper } from './Hero.styled'
import Container from '../../Container/Container'
import CometaImage from '../../../assets/images/CometaHero.png'
import HeroContentWrapper from './HeroContentWrapper/HeroContentWrapper'
import CometaLogo from '../../../assets/images/HeroLogo.png'

const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <LogoWrapper>
                    <CometaImg src={CometaImage} alt="Logo" width={500} />
                    <CometaLogoImg src={CometaLogo} alt="Logo" width={707} />
                </LogoWrapper>

                <HeroContentWrapper />
            </Container>
        </StyledHero>
    )
}

export default memo(Hero)
