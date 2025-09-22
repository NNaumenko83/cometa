import { memo } from 'react'
import Container from '../../Container/Container'
import SectionTitle from '../../SectionTitle/SectionTitle'
import {
    StyledCogaInfoSection,
    TitleTextWrapper,
    ContentWrapper,
    TriangleImg,
    CapibaraImg,
    ButtonWrapper,
    CometaImg,
    CometaImgWrapperMobile,
    CapibaraTriangleWrapperMobile,
    CapibaraTriangleWrapperDesktop,
    CometaImgWrapperDesktop,
    CogaInfoWrapper,
} from './CogaInfo.styled'
import InfoText from '../../Infotext/InfoText'
import SharedLink from '../../SharedLink/SharedLink'
import Triangle from '../../../assets/images/CogaInfoTriangle.png'
import CapibaraAustro from '../../../assets/images/CogaInfoCapibaraImg.png'
import CapibaraAustroDesktop from '../../../assets/images/CogaInfoCapibaraDesktop.png'
import CometaImage from '../../../assets/images/CometaHero.png'

const CogaInfo = () => {
    return (
        <StyledCogaInfoSection id="Axis">
            <Container>
                <CogaInfoWrapper>
                    <CometaImgWrapperDesktop>
                        <CometaImg src={CometaImage} alt="Cometa" width={285} />
                    </CometaImgWrapperDesktop>
                    <ContentWrapper>
                        <TitleTextWrapper>
                            <SectionTitle>what`s axis</SectionTitle>
                            <InfoText>
                                $AXIS, the native token of Cometa Space, powers Poomb Creatures. Players earn, trade, and invest $AXIS,
                                creating real-world value. The Play-to-Earn (P2E) model lets players earn income through gameplay and NFTs.
                            </InfoText>
                        </TitleTextWrapper>
                        <ButtonWrapper>
                            <CometaImgWrapperMobile>
                                <CometaImg src={CometaImage} alt="Cometa" width={121} />
                            </CometaImgWrapperMobile>

                            <SharedLink to="https://cogatoken.com/">$AXIS</SharedLink>
                        </ButtonWrapper>
                    </ContentWrapper>
                    <CapibaraTriangleWrapperDesktop>
                        <TriangleImg src={Triangle} alt="Triangle" width={247} />
                        <CapibaraImg src={CapibaraAustroDesktop} alt="CapibaraAustroDesktop" width={387} />
                    </CapibaraTriangleWrapperDesktop>
                </CogaInfoWrapper>
            </Container>
            <CapibaraTriangleWrapperMobile>
                <TriangleImg src={Triangle} alt="Triangle" width={247} />
                <CapibaraImg src={CapibaraAustro} alt="CapibaraAustroDesktop" width={248} />
            </CapibaraTriangleWrapperMobile>
        </StyledCogaInfoSection>
    )
}

export default memo(CogaInfo)
