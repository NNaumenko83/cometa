import styled from '@emotion/styled'

export const StyledNav = styled.nav``

export const NavList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
`

export const Logo = styled.li`
    /* display: none; */
    @media screen and (min-width: 1200px) {
        display: block;
        border-right: 0.125rem solid #ffffff;
        border-left: 0.125rem solid #ffffff;
        padding: 0rem 1rem 0rem 1rem;

        line-height: 1.1;
    }
`

export const NavLinksListWrapper = styled.li`
    width: 100%;
`
