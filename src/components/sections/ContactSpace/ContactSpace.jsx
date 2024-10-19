import Container from '../../Container/Container'
import SectionTitle from '../../SectionTitle/SectionTitle'

import {
    StyledContactSpace,
    ContactDescription,
    ContactButton,
    ContactWrapper,
    OfficeTitle,
    OfficeLocation,
    ContentWrapper,
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
                        <ContactButton href="mailto:collaboration@cometspace.net">collaboration@cometspace.net</ContactButton>
                        <ContactButton href="mailto:partnership@cometspace.net">partnership@cometspace.net</ContactButton>
                    </ContactWrapper>

                    <ContactWrapper>
                        <OfficeTitle>Our offset</OfficeTitle>
                        <OfficeLocation>Ukraine, Kyiv</OfficeLocation>
                        <OfficeLocation>UAE, Dubai</OfficeLocation>
                        <OfficeLocation>Germany, Berlin</OfficeLocation>
                    </ContactWrapper>
                </ContentWrapper>
            </Container>
        </StyledContactSpace>
    )
}

export default ContactSpace
