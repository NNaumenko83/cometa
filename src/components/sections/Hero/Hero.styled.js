import styled from '@emotion/styled'
import heroBackground from '../../../assets/images/Background_1.png'
import heroBackgroundMobile from '../../../assets/images/Background_1_mobile.png'

export const StyledHero = styled.section`
    display: flex;
    width: 100%;
    background-image: url(${heroBackgroundMobile});
    background-size: cover;
    background-position: 50% 15%;
    background-repeat: no-repeat;

    @media screen and (min-width: 768px) {
        background-image: url(${heroBackground});
        background-position: 50% 0;
    }
`

export const LogoWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-block-start: 120px;

    @media screen and (min-width: 768px) {
        margin-block-start: 170px;
    }
    @media screen and (min-width: 1024px) {
        margin-block-start: 260px;
    }
`

export const CometaImg = styled.img`
    width: 125px;
    position: absolute;
    top: -100%;
    @media screen and (min-width: 768px) {
        width: 300px;
        top: -70%;
    }
    @media screen and (min-width: 1025px) {
        width: 500px;
        top: -55%;
    }
`

export const CometaLogoImg = styled.img`
    position: relative;
    z-index: 2;
    width: 150px;
    @media screen and (min-width: 768px) {
        width: 500px;
    }
    @media screen and (min-width: 1025px) {
        width: 707px;
    }
`
