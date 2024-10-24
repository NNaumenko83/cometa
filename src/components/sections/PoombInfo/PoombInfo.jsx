import { memo } from 'react'

import SectionTitle from '../../SectionTitle/SectionTitle'
import {
    StyledPoombInfoSection,
    TitleTextWrapper,
    ContentWrapper,
    ButtonWrapper,
    TigerImg,
    TriangleImg,
    ImgTitleWrapper,
    CometaImgWrapperModile,
    TitleBreak,
    TitleTextButtonWrapper,
    TriangleCapibaraWrapperMobile,
    TriangleCapibaraWrapperDesktop,
    CometaImgWrapperDesktop,
} from './PoombInfo.styled'
import InfoText from '../../Infotext/InfoText'
import SharedLink from '../../SharedLink/SharedLink'
import Container from '../../Container/Container'
import TigerImage from '../../../assets/images/TigerPoomgImg.png'
import TigerImageDesktop from '../../../assets/images/TigerPoomgImgDesktop.png'
import TriangleImage from '../../../assets/images/TrianglePoombImg.png'
import CometaImage from '../../../assets/images/CometaHero.png'

const PoombInfo = () => {
    return (
        <StyledPoombInfoSection>
            <Container>
                <ContentWrapper>
                    <TriangleCapibaraWrapperDesktop>
                        <TriangleImg src={TriangleImage} alt="TriangleImage" width={248} />
                        <TigerImg src={TigerImageDesktop} alt="TigerImage" width={452} />
                    </TriangleCapibaraWrapperDesktop>
                    <TitleTextButtonWrapper>
                        <TitleTextWrapper>
                            <ImgTitleWrapper>
                                <CometaImgWrapperModile>
                                    <img src={CometaImage} alt="CometaImage" width={121} />
                                </CometaImgWrapperModile>

                                <SectionTitle>
                                    what`s <TitleBreak />
                                    poomb
                                </SectionTitle>
                            </ImgTitleWrapper>

                            <InfoText>
                                The crypto project Poomb Creatures immediately captures attention with its INNOVATION and carefully
                                constructed ACTION PLAN 🚀. The game consists of an ecosystem of projects that develop in stages, creating
                                the BEST conditions for profitable investment for players 💰. One of the main advantages of this project is
                                the already funded capital for the game’s development. Poomb Creatures is not dependent on player
                                investments; the game will be fully released REGARDLESS of the number of users and within the company’s
                                specified timeframes 🎯. This key difference from other similar projects draws interest, providing
                                RELIABILITY and confidence to players in their well-invested funds
                            </InfoText>
                        </TitleTextWrapper>
                        <ButtonWrapper>
                            <SharedLink to="https://cogatoken.com/">$Poomb</SharedLink>
                        </ButtonWrapper>
                    </TitleTextButtonWrapper>

                    <CometaImgWrapperDesktop>
                        <img src={CometaImage} alt="CometaImage" width={183} />
                    </CometaImgWrapperDesktop>
                </ContentWrapper>
                <TriangleCapibaraWrapperMobile>
                    <TriangleImg src={TriangleImage} alt="TriangleImage" width={138} />
                    <TigerImg src={TigerImage} alt="TigerImage" width={248} />
                </TriangleCapibaraWrapperMobile>
            </Container>
        </StyledPoombInfoSection>
    )
}

export default memo(PoombInfo)
