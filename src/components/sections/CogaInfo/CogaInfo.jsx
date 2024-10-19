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
} from './CogaInfo.styled'
import InfoText from '../../Infotext/InfoText'
import Button from '../../Button/Button'
import Triangle from '../../../assets/images/CogaInfoTriangle.png'
import CapibaraAustro from '../../../assets/images/CogaInfoCapibaraImg.png'
import CometaImage from '../../../assets/images/CometaHero.png'

const CogaInfo = () => {
    return (
        <StyledCogaInfoSection>
            <Container>
                <ContentWrapper>
                    <TitleTextWrapper>
                        <SectionTitle>what`s coga</SectionTitle>
                        <InfoText>
                            $COGA, the native token of Comet Space, powers Poomb Creatures. Players earn, trade, and invest $COGA, creating
                            real-world value. The Play-to-Earn (P2E) model lets players earn income through gameplay and NFTs.
                        </InfoText>
                    </TitleTextWrapper>
                    <ButtonWrapper>
                        <CometaImg src={CometaImage} alt="Cometa" width={121} />
                        <Button>$COGA</Button>
                    </ButtonWrapper>
                </ContentWrapper>
            </Container>
            <TriangleImg src={Triangle} alt="Triangle" width={247} />
            <CapibaraImg src={CapibaraAustro} alt="Triangle" width={248} />
        </StyledCogaInfoSection>
    )
}

export default memo(CogaInfo)
