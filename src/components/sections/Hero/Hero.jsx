import { memo } from 'react'
import { StyledHero, CometaImg } from './Hero.styled'
import Container from '../../Container/Container'
import CometaImage from '../../../assets/images/CometaHero.png'
import HeroContentWrapper from './HeroContentWrapper/HeroContentWrapper'

const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <CometaImg src={CometaImage} alt="Logo" width={175} />
                <HeroContentWrapper />
            </Container>
        </StyledHero>
    )
}

export default memo(Hero)
