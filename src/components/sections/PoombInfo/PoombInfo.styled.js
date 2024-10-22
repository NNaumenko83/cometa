import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_4_mobile.png'
import BackgroundDesktop from '../../../assets/images/BackgroundPoombDesktop.png'

export const StyledPoombInfoSection = styled.section`
    padding-block-start: 7.5rem;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 10%;
        z-index: 2;
        display: block;
        width: 100%;
        height: 2448px;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: 10%;
        z-index: 1;
        display: block;
        width: 100%;
        height: 2448px;

        background-image: url(${Background});
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 768px) {
        padding-block-start: 25rem;
        padding-block-end: 16.75rem;

        ::before {
            top: 0;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) 10px, rgba(9, 9, 9, 0.6) 200px);

            height: 2447px;
        }
        ::after {
            top: 0;
            height: 2447px;
            background-image: url(${BackgroundDesktop});
        }
    }
`
export const TitleTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`
export const ContentWrapper = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 18.75rem;
    align-items: center;

    @media screen and (min-width: 768px) {
        gap: 0;
        flex-direction: row;
    }
`
export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const TigerImg = styled.img`
    position: absolute;
    z-index: 3;
    bottom: 3.4375rem;

    @media screen and (min-width: 768px) {
        left: 0rem;
        bottom: 0rem;
    }
`
export const TriangleImg = styled.img`
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 5.375rem;

    @media screen and (min-width: 768px) {
        left: 10rem;
        bottom: -3.5rem;
    }
`
export const ImgTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
export const CometaImgWrapperModile = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const TitleBreak = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const TitleTextButtonWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 318px;
    flex-grow: 1;

    @media screen and (min-width: 768px) {
        flex-basis: 489px;
        max-width: 489px;
        gap: 42px;
    }
`

export const TriangleCapibaraWrapperDesktop = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        flex-basis: 452px;
        padding-inline-end: 60px;
    }
`
export const TriangleCapibaraWrapperMobile = styled.div`
    /* position: absolute; */

    z-index: 3;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const CometaImgWrapperDesktop = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        margin-inline-start: auto;
    }
`
