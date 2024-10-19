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
} from './HeroContentWrapper.styled'
import LeftTriangle from '../../../../assets/images/MobileImg/HeroTriangLeft.png'
import RightTriangle from '../../../../assets/images/MobileImg/HeroTriangRight.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const HeroContentWrapper = () => {
    return (
        <Wrapper>
            <WrapperLeftSide>
                <img src={LeftTriangle} alt="" width={56} />
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
                <img src={RightTriangle} alt="" width={65} />
            </WrapperRightSide>
        </Wrapper>
    )
}

export default HeroContentWrapper
