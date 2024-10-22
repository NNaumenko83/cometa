import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_3_mobile.png'
import BackgroundDesktop from '../../../assets/images/Background_2.png'

export const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 1500px;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        z-index: 0;
        display: block;
        width: 100%;
        height: 1500px;

        background-image: url(${Background});
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 768px) {
        ::before {
            height: 1207px;
        }
        ::after {
            height: 1207px;
            background-image: url(${BackgroundDesktop});
        }
    }
`

export const ImgTitleWrapper = styled.div`
    margin-inline: auto;
    display: flex;

    gap: 0.625rem;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        gap: 1.75rem;
    }
`
export const CometaImage = styled.img`
    position: relative;
    width: 140px;
    z-index: 3;
    @media screen and (min-width: 768px) {
        width: 184px;
    }
`

export const StyledLeftTriangle = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        top: -127px;
        z-index: 2;
    }
`
export const StyledRightTriangle = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        z-index: 2;
        right: 0;
        top: 55px;
    }
`
