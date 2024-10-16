import { NavList, StyledNav, NavLinksListWrapper } from './NavBar.styled'
import { navLinks } from '../../../constants/navBarLinks'
import NavLinksList from './NavLinksList/NavLinksList'


const NavBar = () => {
    return (
        <StyledNav>
            <NavList>
                <NavLinksListWrapper>
                    <NavLinksList links={navLinks} />
                </NavLinksListWrapper>
            </NavList>
        </StyledNav>
    )
}

export default NavBar
