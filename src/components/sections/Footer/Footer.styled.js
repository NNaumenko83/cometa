import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
    position: relative;
    z-index: 3;

    padding-block: 50px 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 2px solid rgb(255, 255, 255);
    background: rgb(9, 9, 9);
`

export const Title = styled.h3`
    margin-block-end: 10px;
    color: rgb(255, 48, 141);
    font-family: League Spartan;
    font-size: 22px;
    font-weight: 700;

    text-transform: uppercase;
`

export const ButtonGroup = styled.div`
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
    column-gap: 20px;

    @media screen and (min-width: 768px) {
        flex-basis: 387px;
    }

    button {
        flex-basis: 45%;
        flex-grow: 1;
        background-color: #333;
        padding: 10px;
        height: 52px;

        border-radius: 12px;
        backdrop-filter: blur(20px);
        background: rgba(233, 233, 233, 0.2);
        color: inherit;
        font-size: 16px;
        font-weight: 400;

        &:hover {
            background-color: #444;
        }
    }
`

export const SocialLinksList = styled.ul`
    display: flex;

    gap: 0.5rem;
    @media screen and (min-width: 768px) {
        gap: 1.25rem;
    }
`

export const SocialIconWrapper = styled.li`
    position: relative;
    flex-shrink: 1;
    flex-basis: 80px;
    /* width: 80px;
    height: 80px; */
    transition: transform 0.3s linear;
    :hover {
        transform: scale(1.1);
    }

    svg {
        width: 24px;
        height: 24px;
    }

    @media screen and (min-width: 768px) {
        svg {
            width: 30px;
            height: 30px;
        }
    }
`

export const SocialCometaImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const SocialIconLink = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;

    border-radius: 50%;
`
export const FooterInfo = styled.div`
    display: flex;
    margin-block-end: 36px;
    flex-direction: column;
    gap: 24px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 20px;
        justify-content: space-between;
    }
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const BrandContainer = styled.div`
    font-size: 22px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
    @media screen and (min-width: 768px) {
        flex-basis: 132px;
        flex-direction: column;
    }
`

export const SolutionWrapper = styled.div`
    @media screen and (min-width: 768px) {
        flex-basis: 285px;
    }
`
export const PartnersWrapper = styled.div`
    @media screen and (min-width: 768px) {
        flex-basis: 285px;
    }
`
export const Text = styled.p`
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
`
