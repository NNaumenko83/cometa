import Container from '../../../../components/Container/Container'
import { teamMembers } from '../../../../constants/AbotPageConstants/teamMembers'
import SecondaryTitleAboutPage from '../../components/SecondaryTitleAboutPage/SecondaryTitleAboutPage'
import {
    StyledKeyRolesTeam,
    Text,
    PhotoGrid,
    PhotoItem,
    Image,
    ContentWrapper,
    StyledTriangleImg,
    TitleWrapper,
    ImgWrapper,
    Description,
    LinkedInLink,
    DescriptionWrapper,
} from './KeyRolesTeam.styled'
import TriangleImg from '../../../../assets/images/AboutPage/TriangleLeft.png'

const KeyRolesTeam = () => {
    return (
        <StyledKeyRolesTeam>
            <Container>
                <ContentWrapper>
                    <div>
                        <SecondaryTitleAboutPage>Meet the Key Roles Team 💻</SecondaryTitleAboutPage>
                        <Text>
                            At the heart of COMET SPACE is our Space Team, a group of experts with extensive experience in game development,
                            blockchain, NFTs, and cryptocurrency. Together, we are driven by a shared vision of creating exceptional gaming
                            products that push the boundaries of technology.
                        </Text>
                    </div>
                    <PhotoGrid>
                        {teamMembers.map((member, index) => (
                            <PhotoItem key={index}>
                                <ImgWrapper>
                                    <Image src={member.imageSrc} alt={`${member.name}`} />
                                </ImgWrapper>
                                <DescriptionWrapper>
                                    <TitleWrapper>
                                        <h2>{member.position}</h2>
                                        <h3>{member.name}</h3>
                                    </TitleWrapper>

                                    <Description>{member.description}</Description>
                                    <div>
                                        <LinkedInLink href={member.linkedin}>linkedin</LinkedInLink>
                                    </div>
                                </DescriptionWrapper>
                            </PhotoItem>
                        ))}
                    </PhotoGrid>
                </ContentWrapper>
            </Container>
            <StyledTriangleImg src={TriangleImg} alt="Triangle" width={55} />
        </StyledKeyRolesTeam>
    )
}

export default KeyRolesTeam
