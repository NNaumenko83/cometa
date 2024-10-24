import styled from '@emotion/styled'
import MobileBg from '../../../assets/images/JobPage/BackgroundMobile.png'
import MobileDesktop from '../../../assets/images/JobPage/BackgroundDesktop.png'

export const StyledCareer = styled.section`
    background-image: url(${MobileBg});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (min-width: 768px) {
        background-image: url(${MobileDesktop});
    }
`
export const CareerContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items: center;
    margin-block-start: 100px;
    max-width: 1000px;
    margin-inline: auto;

    @media screen and (min-width: 768px) {
        margin-block-start: 164px;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const CareerTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media screen and (min-width: 768px) {
        order: -1;
    }
`
export const CareerLogoWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const CareerTitle = styled.h1`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-transform: uppercase;
`

export const CareerTitleMainPart = styled.span`
    font-size: 40px;
    font-weight: 900;
    text-align: left;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
        font-size: 60px;
    }
`
export const CareerTitleMSecondaryPart = styled.span`
    color: rgb(255, 48, 141);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`

export const CometaLogoImg = styled.img`
    position: relative;
    z-index: 5;
    width: 100%;

    /* @media screen and (min-width: 768px) {
        width: 707px;
    } */
`

export const LinkedInLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
`

export const LinkedInLink = styled.a`
    font-size: 20px;
    text-decoration-line: underline;
`

export const IconWrapper = styled.div`
    position: relative;
`
export const Icon = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
