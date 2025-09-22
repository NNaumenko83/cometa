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
        <StyledContactSpace id="Contact">
            <Container>
                <ContentWrapper>
                    <SectionTitle>Contact Space</SectionTitle>
                    <ContactWrapper>
                        <ContactDescription>
                            To learn more about our products, games, discuss opportunities, or ask any questions, please contact us
                        </ContactDescription>
                        <ContactButton href="#">info@example.com</ContactButton>
                    </ContactWrapper>
                    <ContactWrapper>
                        <ContactDescription>For new partnerships and collaborations, please, contact us</ContactDescription>
                        <ContactsWrapper>
                            <ContactButton href="#">collaboration@example.com</ContactButton>
                            <ContactButton href="#">partnership@example.com</ContactButton>
                        </ContactsWrapper>
                    </ContactWrapper>

                    <ContactWrapper>
                        <OfficeTitle>Our office</OfficeTitle>
                        <ContactsWrapper>
                            <OfficeLocation>USA, New York</OfficeLocation>
                            <OfficeLocation>UK, London</OfficeLocation>
                            <OfficeLocation>Japan, Tokyo</OfficeLocation>
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
