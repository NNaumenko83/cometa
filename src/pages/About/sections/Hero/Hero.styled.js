import styled from '@emotion/styled'

export const StyledHero = styled.section`
    padding-block-start: 4rem;
    @media screen and (min-width: 768px) {
        padding-block-start: 13.125rem;
    }
`
export const HeroContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`
export const HeroTitleWrapper = styled.div`
    @media screen and (min-width: 768px) {
        order: -1;
    }
`
export const HeroLogoWrapper = styled.div``

export const HeroTitle = styled.h1`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    text-transform: uppercase;
`

export const HeroTitleMainPart = styled.span`
    font-size: 24px;
    font-weight: 900;
    @media screen and (min-width: 768px) {
        font-size: 60px;
    }
`
export const HeroTitleMSecondaryPart = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 48, 141);

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`

export const CometaLogoImg = styled.img`
    position: relative;
    z-index: 5;
    width: 218px;

    @media screen and (min-width: 768px) {
        width: 707px;
    }
`
