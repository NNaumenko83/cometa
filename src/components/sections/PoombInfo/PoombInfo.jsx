import { memo } from 'react'

import SectionTitle from '../../SectionTitle/SectionTitle'
import { StyledPoombInfoSection, TitleTextWrapper, ContentWrapper, ButtonWrapper, TigerImg, TriangleImg } from './PoombInfo.styled'
import InfoText from '../../Infotext/InfoText'
import Button from '../../Button/Button'
import Container from '../../Container/Container'
import TigerImage from '../../../assets/images/TigerPoomgImg.png'
import TriangleImage from '../../../assets/images/TrianglePoombImg.png'

const PoombInfo = () => {
    return (
        <StyledPoombInfoSection>
            <Container>
                <ContentWrapper>
                    <TitleTextWrapper>
                        <SectionTitle>
                            what`s <br />
                            poomb
                        </SectionTitle>
                        <InfoText>
                            The crypto project Poomb Creatures immediately captures attention with its INNOVATION and carefully constructed
                            ACTION PLAN 🚀. The game consists of an ecosystem of projects that develop in stages, creating the BEST
                            conditions for profitable investment for players 💰. One of the main advantages of this project is the already
                            funded capital for the game’s development. Poomb Creatures is not dependent on player investments; the game will
                            be fully released REGARDLESS of the number of users and within the company’s specified timeframes 🎯. This key
                            difference from other similar projects draws interest, providing RELIABILITY and confidence to players in their
                            well-invested funds
                        </InfoText>
                    </TitleTextWrapper>
                    <ButtonWrapper>
                        <Button>$Poomb</Button>
                    </ButtonWrapper>
                </ContentWrapper>
                <TriangleImg src={TriangleImage} alt="TriangleImage" width={138} />
                <TigerImg src={TigerImage} alt="TigerImage" width={248} />
            </Container>
        </StyledPoombInfoSection>
    )
}

export default memo(PoombInfo)
