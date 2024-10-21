import styled from '@emotion/styled'

export const StyledCogaInfoSection = styled.section`
    position: relative;
    z-index: 3;
    padding-block-start: 120px;
    @media screen and (min-width: 768px) {
        padding-block-start: 290px;
    }
`
export const TitleTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 303px;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 488px;
        gap: 42px;
    }
`

export const TriangleImg = styled.img`
    position: absolute;
    top: 5.625rem;
    right: 0;
    z-index: -2;
    @media screen and (min-width: 768px) {
        top: -208px;
        right: 123px;
    }
`
export const CapibaraImg = styled.img`
    position: absolute;
    top: 16.25rem;
    right: 0;
    z-index: -1;
    @media screen and (min-width: 768px) {
        top: -4.125rem;
    }
`

export const ButtonWrapper = styled.div`
    position: relative;
    z-index: 10;
`

export const CometaImg = styled.img``

export const CometaImgWrapperMobile = styled.div`
    position: absolute;
    top: -100%;
    left: -65%;

    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const CapibaraTriangleWrapperMobile = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const CapibaraTriangleWrapperDesktop = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        height: 100%;
        top: 0;
        right: 15px;
    }
`
export const CometaImgWrapperDesktop = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        height: 100%;

        top: 0;
        right: 15px;
    }
`

export const CogaInfoWrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 20px;
    }
`
