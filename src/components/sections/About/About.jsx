import { memo } from 'react'
import AboutTitle from './AboutTitle/AboutTitle'
import { StyledAbout, ImgTitleWrapper, CometaImage, StyledLeftTriangle, StyledRightTriangle } from './About.styled'
import CometaImg from '../../../assets/images/CometaHero.png'
import AboutContent from './AboutContent/AboutContent'
import Container from '../../Container/Container'
import SocialMedia from './SocialMedia/SocialMedia'

import LeftTriangle from '../../../assets/images/Big_triangle_1_left.png'
import RightTriangle from '../../../assets/images/Big_triangle_1_right.png'

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
            </Container>
            <StyledLeftTriangle src={LeftTriangle} alt="Triangle" width={146} />
            <StyledRightTriangle src={RightTriangle} alt="Triangle" width={155} />
        </StyledAbout>
    )
}

export default memo(About)
