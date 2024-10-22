import styled from '@emotion/styled'
import heroBackground from '../../../assets/images/Background_1.png'
import heroBackgroundMobile from '../../../assets/images/Background_1_mobile.png'

export const StyledHero = styled.section`
    display: flex;
    width: 100%;
    background-size: cover;

    background-repeat: no-repeat;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;

        background-image: url(${heroBackgroundMobile});
        background-position: 50% 15%;

        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 768px) {
        ::before {
            height: 1331px;
        }

        ::after {
            height: 1331px;
            background-image: url(${heroBackground});
        }
    }
`

export const LogoWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-block-start: 120px;

    @media screen and (min-width: 768px) {
        margin-block-start: 260px;
    }
`

export const CometaImg = styled.img`
    width: 174px;
    position: absolute;
    z-index: 3;

    top: -80%;
    @media screen and (min-width: 768px) {
        width: 300px;
        top: -70%;
    }
    @media screen and (min-width: 1440px) {
        width: 500px;
        top: -55%;
    }
`

export const CometaLogoImg = styled.img`
    position: relative;
    z-index: 5;
    width: 200px;
    @media screen and (min-width: 768px) {
        width: 500px;
    }
    @media screen and (min-width: 1440px) {
        width: 707px;
    }
`
