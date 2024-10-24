/* eslint-disable react/prop-types */
import Container from '../../../components/Container/Container'
import {
    StyledCareer,
    CareerContentWrapper,
    CareerLogoWrapper,
    CareerTitle,
    CareerTitleMSecondaryPart,
    CareerTitleMainPart,
    CareerTitleWrapper,
    CometaLogoImg,
    LinkedInLinkWrapper,
    LinkedInLink,
    IconWrapper,
    Icon,
} from './CareerPageWrapper.styled'
import CometaLogo from '../../../assets/images/HeroLogo.png'
import CometaImg from '../../../assets/images/JobPage/Cometa.png'
import { FaLinkedinIn } from 'react-icons/fa'

const CareerPageWrapper = ({ children }) => {
    return (
        <StyledCareer>
            <Container>
                <CareerContentWrapper>
                    <CareerLogoWrapper>
                        <CometaLogoImg src={CometaLogo} alt="Logo" width={398} />
                    </CareerLogoWrapper>
                    <CareerTitleWrapper>
                        <CareerTitle>
                            <CareerTitleMainPart>cometa SPACE</CareerTitleMainPart>
                            <CareerTitleMSecondaryPart>GameDev Studio</CareerTitleMSecondaryPart>
                        </CareerTitle>
                        <LinkedInLinkWrapper>
                            <IconWrapper>
                                <Icon>
                                    <FaLinkedinIn size={24} />
                                </Icon>
                                <img src={CometaImg} alt="Cometa" width={40} />
                            </IconWrapper>

                            <LinkedInLink
                                href="https://www.linkedin.com/company/cometaspace"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                LinkedIn
                            </LinkedInLink>
                        </LinkedInLinkWrapper>
                    </CareerTitleWrapper>
                </CareerContentWrapper>
                {children}
            </Container>
        </StyledCareer>
    )
}

export default CareerPageWrapper
