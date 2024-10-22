import Container from '../../Container/Container'
import SectionTitle from '../../SectionTitle/SectionTitle'
import LeftTriangle from '../../../assets/images/BlogTriangleBig.png'
import RightTriangle from '../../../assets/images/WorkSpaceTriangle.png'

import {
    StyledContactSpace,
    ContactDescription,
    ContactButton,
    ContactWrapper,
    OfficeTitle,
    OfficeLocation,
    ContentWrapper,
    ContactsWrapper,
    StyledLeftTriangleImg,
    StyledRightTriangleImg,
} from './ContactSpace.styled'

const ContactSpace = () => {
    return (
        <StyledContactSpace>
            <Container>
                <ContentWrapper>
                    <SectionTitle>Contact Space</SectionTitle>
                    <ContactWrapper>
                        <ContactDescription>
                            To learn more about our products, games, discuss opportunities, or ask any questions, please contact us
                        </ContactDescription>
                        <ContactButton href="mailto:info@cometspace.net">info@cometspace.net</ContactButton>
                    </ContactWrapper>
                    <ContactWrapper>
                        <ContactDescription>For new partnerships and collaborations, please, contact us</ContactDescription>
                        <ContactsWrapper>
                            <ContactButton href="mailto:collaboration@cometspace.net">collaboration@cometspace.net</ContactButton>
                            <ContactButton href="mailto:partnership@cometspace.net">partnership@cometspace.net</ContactButton>
                        </ContactsWrapper>
                    </ContactWrapper>

                    <ContactWrapper>
                        <OfficeTitle>Our offset</OfficeTitle>
                        <ContactsWrapper>
                            <OfficeLocation>Ukraine, Kyiv</OfficeLocation>
                            <OfficeLocation>UAE, Dubai</OfficeLocation>
                            <OfficeLocation>Germany, Berlin</OfficeLocation>
                        </ContactsWrapper>
                    </ContactWrapper>
                </ContentWrapper>
                <StyledLeftTriangleImg src={LeftTriangle} alt="Triangle" width={81} />
                <StyledRightTriangleImg src={RightTriangle} alt="Triangle" width={172} />
            </Container>
        </StyledContactSpace>
    )
}

export default ContactSpace
