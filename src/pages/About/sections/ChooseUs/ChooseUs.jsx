import Container from '../../../../components/Container/Container'
import SecondaryTitleAboutPage from '../../components/SecondaryTitleAboutPage/SecondaryTitleAboutPage'
import {
    StyledChooseUs,
    ChooseUsList,
    ContactInfo,
    OfficesList,
    ContentWrapper,
    InfoMailLink,
    OfficesWrapper,
    StyledTriangleLeftImg,
    StyledTriangleRightImg,
} from './ChooseUs.styled'
import TriangleLeftImg from '../../../../assets/images/AboutPage/TriangleLeft.png'
import TriangleRightImg from '../../../../assets/images/AboutPage/TriangleRightBig.png'

const ChooseUs = () => {
    return (
        <StyledChooseUs>
            <Container>
                <ContentWrapper>
                    <div>
                        <SecondaryTitleAboutPage>Why Choose Us? 🎮💡</SecondaryTitleAboutPage>
                        <ChooseUsList>
                            <li>
                                <p>Innovative Technology:</p> We leverage the power of Web3, NFT, and blockchain to offer players an
                                experience like no other.
                            </li>
                            <li>
                                <p>Player-Centric:</p> We prioritize player experience, making sure our products are fun, engaging, and
                                financially rewarding.
                            </li>
                            <li>
                                <p>Global Community:</p> We are building a strong, inclusive, and engaged community of players and crypto
                                enthusiasts.
                            </li>
                        </ChooseUsList>
                        <ContactInfo>
                            <p>Our Space Team is always happy to assist you and answer all your inquiries.</p>
                            <div>
                                <p>
                                    To learn more about our products, games, discuss opportunities, or ask any questions, please contact us
                                    at:
                                </p>
                                <InfoMailLink href="mailto:info@cometspace.net">info@cometspace.net</InfoMailLink>
                            </div>

                            <div>
                                <p>For new partnerships and collaborations, please contact us:</p>
                                <a href="mailto:collaboration@cometspace.net">collaboration@cometspace.net</a>
                                <br />
                                <a href="mailto:partnership@cometspace.net">partnership@cometspace.net</a>
                            </div>
                        </ContactInfo>
                    </div>

                    <OfficesWrapper>
                        <SecondaryTitleAboutPage>Our Offices</SecondaryTitleAboutPage>
                        <OfficesList>
                            <li>Kyiv, Ukraine / Dubai</li>
                            <li>United Arab Emirates</li>
                            <li>Berlin, Germany</li>
                        </OfficesList>
                    </OfficesWrapper>
                </ContentWrapper>
            </Container>
            <StyledTriangleLeftImg src={TriangleLeftImg} alt="Triangle" width={50} />
            <StyledTriangleRightImg src={TriangleRightImg} alt="Triangle" width={92} />
        </StyledChooseUs>
    )
}

export default ChooseUs
