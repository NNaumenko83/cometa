import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-block-start: 1.0625rem;
    margin-block-end: 3.75rem;

    position: relative;
    z-index: 3;

    @media screen and (min-width: 768px) {
        max-width: 490px;
        margin-inline: auto;
        margin-block-end: 14.6875rem;
    }
    @media screen and (min-width: 1440px) {
    }
`
export const WrapperLeftSide = styled.div`
    display: flex;
    align-items: center;
`
export const WrapperCenterSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 100%;

        padding-inline: 25px;
    }
`
export const WrapperRightSide = styled.div``

export const Title = styled.h1`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
`
export const TopPartTitle = styled.span`
    display: flex;
    gap: 0.625rem;

    @media screen and (min-width: 768px) {
        margin-inline-start: auto;
        gap: 1.5625rem;
    }
`
export const BottomPartTitle = styled.span`
    display: flex;
    gap: 0.625rem;

    @media screen and (min-width: 768px) {
        width: 100%;
        gap: 0.875rem;
    }
`
export const PrimaryTextTitle = styled.span`
    color: rgb(255, 255, 255);
    font-family: League Spartan, sans-serif;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.1;

    text-transform: uppercase;
    position: relative;
    z-index: 4;

    @media screen and (min-width: 768px) {
        font-size: 62px;
    }
`
export const SocondaryTextTitle = styled.span`
    color: rgb(255, 255, 255);
    font-family: League Spartan, sans-serif;
    font-size: 1.125rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    position: relative;
    z-index: 4;

    display: flex;
    align-items: center;

    @media screen and (min-width: 768px) {
        font-size: 42px;
    }
`

export const DotWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const StyledLeftTriangleImg = styled.img`
    width: 56px;
    @media screen and (min-width: 768px) {
        width: 110px;
        position: absolute;
        top: 0%;
    }
`
export const StyledRightTriangleImg = styled.img`
    width: 66px;
    @media screen and (min-width: 768px) {
        width: 128px;
        position: absolute;
        right: 0;
        top: -50%;
    }
`
