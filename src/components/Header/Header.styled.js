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
    font-size: 0.625rem;
    line-height: 1.1;
    letter-spacing: 0%;

    @media screen and (min-width: 48rem) {
        width: 100%;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 59.25rem) {
        font-size: 1rem;
    }

    @media screen and (min-width: 67.5rem) {
        font-size: 1.1875rem;
    }
`
