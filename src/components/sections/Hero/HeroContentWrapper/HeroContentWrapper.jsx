import {
    Wrapper,
    WrapperLeftSide,
    WrapperCenterSide,
    WrapperRightSide,
    BottomPartTitle,
    PrimaryTextTitle,
    SocondaryTextTitle,
    Title,
    TopPartTitle,
    DotWrapper,
    StyledLeftTriangleImg,
    StyledRightTriangleImg,
} from './HeroContentWrapper.styled'
import LeftTriangle from '../../../../assets/images/Hero_triangle_left.png'
import RightTriangle from '../../../../assets/images/Hero_triangle_right.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const HeroContentWrapper = () => {
    return (
        <Wrapper>
            <WrapperLeftSide>
                <StyledLeftTriangleImg src={LeftTriangle} alt="" width={110} />
            </WrapperLeftSide>
            <WrapperCenterSide>
                <Title>
                    <TopPartTitle>
                        <SocondaryTextTitle>when</SocondaryTextTitle>
                        <PrimaryTextTitle>Gaiming</PrimaryTextTitle>
                    </TopPartTitle>
                    <BottomPartTitle>
                        <SocondaryTextTitle>meet</SocondaryTextTitle>
                        <DotWrapper>
                            {' '}
                            <FiberManualRecordIcon sx={{ fontSize: '10px' }} />
                        </DotWrapper>

                        <SocondaryTextTitle>crypto</SocondaryTextTitle>
                    </BottomPartTitle>
                </Title>
            </WrapperCenterSide>
            <WrapperRightSide>
                <StyledRightTriangleImg src={RightTriangle} alt="" width={128} />
            </WrapperRightSide>
        </Wrapper>
    )
}

export default HeroContentWrapper
