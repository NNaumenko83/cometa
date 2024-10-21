import { memo } from 'react'
import AboutTitle from './AboutTitle/AboutTitle'
import { StyledAbout, ImgTitleWrapper, CometaImage } from './About.styled'
import CometaImg from '../../../assets/images/CometaHero.png'
import AboutContent from './AboutContent/AboutContent'
import Container from '../../Container/Container'
import SocialMedia from './SocialMedia/SocialMedia'
import FeatureShowcase from './FeatureShowcase/FeatureShowcase'

const About = () => {
    return (
        <StyledAbout>
            <Container>
                <ImgTitleWrapper>
                    <CometaImage src={CometaImg} alt="Cometa" width={184} />
                    <AboutTitle>
                        About <br />
                        Space
                    </AboutTitle>
                </ImgTitleWrapper>
                <AboutContent />
                <SocialMedia />
                <FeatureShowcase />
            </Container>
        </StyledAbout>
    )
}

export default memo(About)
