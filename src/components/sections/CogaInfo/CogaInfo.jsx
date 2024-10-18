import { memo } from 'react'
import Container from '../../Container/Container'
import SectionTitle from '../../SectionTitle/SectionTitle'
import { StyledCogaInfoSection, TitleTextWrapper } from './CogaInfo.styled'
import InfoText from '../../Infotext/InfoText'

const CogaInfo = () => {
    return (
        <StyledCogaInfoSection>
            <Container>
                <TitleTextWrapper>
                    <SectionTitle>what`s coga</SectionTitle>
                    <InfoText>
                        $COGA, the native token of Comet Space, powers Poomb Creatures. Players earn, trade, and invest
                        $COGA, creating real-world value. The Play-to-Earn (P2E) model lets players earn income through
                        gameplay and NFTs.
                    </InfoText>
                </TitleTextWrapper>
            </Container>
        </StyledCogaInfoSection>
    )
}

export default memo(CogaInfo)
