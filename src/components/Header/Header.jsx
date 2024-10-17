import { useState, useCallback, useEffect, memo } from 'react'
import NavBar from './NavBar/NavBar'

import MenuIcon from '@mui/icons-material/Menu'
import { NavBarWrapper, StyledHeader } from './Header.styled'
import MobileMenu from './NavBar/MobileMenu/MobileMenu'
import MobileMenuButton from './NavBar/MobileMenuButton/MobileMenuButton'
import LoginButton from './NavBar/LoginButton/LoginButton'
import Container from '../Container/Container'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prevState => !prevState)
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <StyledHeader>
            <Container>
                <NavBarWrapper>
                    <NavBar />
                    <LoginButton />
                </NavBarWrapper>
            </Container>

            <MobileMenuButton onClick={toggleMenu}>
                <MenuIcon size={18} />
            </MobileMenuButton>
            <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </StyledHeader>
    )
}

export default memo(Header)
