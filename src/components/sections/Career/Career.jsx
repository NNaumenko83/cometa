import { memo } from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Container from '../../Container/Container'
import { CareerContentWrapper, StyledCareer, TitleLinkWrapper, CareerLink } from './Career.styled'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CareerList from './CareerList/CareerList'

const Career = () => {
    return (
        <StyledCareer>
            <Container>
                <CareerContentWrapper>
                    <TitleLinkWrapper>
                        <SectionTitle>CAREER in SPACE</SectionTitle>

                        <CareerLink href="#">
                            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                        </CareerLink>
                    </TitleLinkWrapper>
                    <CareerList />
                </CareerContentWrapper>
            </Container>
        </StyledCareer>
    )
}

export default memo(Career)
