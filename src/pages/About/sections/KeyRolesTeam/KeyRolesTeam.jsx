import Container from '../../../../components/Container/Container'
import { keyRolesPhoto } from '../../../../constants/AbotPageConstants/keyRolesPhoto'
import SecondaryTitleAboutPage from '../../components/SecondaryTitleAboutPage/SecondaryTitleAboutPage'
import { StyledKeyRolesTeam, Text, PhotoGrid, PhotoItem, Image, ContentWrapper, StyledTriangleImg } from './KeyRolesTeam.styled'
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
                        {keyRolesPhoto.map((photo, index) => (
                            <PhotoItem key={index}>
                                <Image src={photo} alt={`Key Role ${index + 1}`} />
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
