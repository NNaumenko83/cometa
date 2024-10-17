import styled from '@emotion/styled'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    z-index: 1000;
    background-color: transparent;
    position: fixed;
    top: 0%;
    left: 0;
    right: 0;
    margin-inline: auto;
`

export const NavBarWrapper = styled.div`
    display: none;
    font-family: League Spartan, sans-serif;
    font-size: 10px;
    line-height: 1.1;
    letter-spacing: 0%;

    @media screen and (min-width: 768px) {
        width: 100%;
        margin-top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 948px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1080px) {
        font-size: 19px;
    }
`
