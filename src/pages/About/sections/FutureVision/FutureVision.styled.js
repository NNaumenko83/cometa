import styled from '@emotion/styled'
import FeatureTwoBg from '../../../../assets/images/AboutPage/FututeVisionTwoImg.jpg'

export const StyledFutureVision = styled.section`
    padding-block-start: 100px;

    @media screen and (min-width: 768px) {
        padding-block-start: 178px;
    }
`

export const MobileFutureTwoWrapper = styled.div`
    @media screen {
        @media screen and (min-width: 768px) {
            display: none;
        }
    }
`

export const DesktopFutureTwoWrapper = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        width: 100%;
        background-image: url(${FeatureTwoBg});
        background-position-x: -200px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        background-repeat: no-repeat;
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(269.43deg, rgb(17, 17, 20) 20%, rgba(22, 22, 28, 0.01) 99.543%);
        z-index: 1;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    @media screen and (min-width: 768px) {
        gap: 177px;
    }
`
export const InfoWrapper = styled.div`
    width: 50%;
    margin-inline-start: auto;
    padding-inline-start: 85px;
    padding-block: 46px;
    position: relative;
    z-index: 3;
`
