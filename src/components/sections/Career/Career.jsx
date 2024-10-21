import { memo } from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Container from '../../Container/Container'
import { CareerContentWrapper, StyledCareer, TitleLinkWrapper, CareerLink, StyledCometaImg, StyledTriangleImg } from './Career.styled'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CareerList from './CareerList/CareerList'
import CometaImg from '../../../assets/images/CareerCometa.png'
import TriangleImg from '../../../assets/images/CareerTriangle.png'

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
                <StyledCometaImg src={CometaImg} alt="Cometa" />
                <StyledTriangleImg src={TriangleImg} alt="Triangle" />
            </Container>
        </StyledCareer>
    )
}

export default memo(Career)
