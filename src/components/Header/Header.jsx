import { useState, useCallback, useEffect, memo } from 'react'
import NavBar from './NavBar/NavBar'

import MenuIcon from '@mui/icons-material/Menu'
import { NavBarWrapper } from './Header.styled'
import MobileMenu from './NavBar/MobileMenu/MobileMenu'
import MobileMenuButton from './NavBar/MobileMenuButton/MobileMenuButton'

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
        <header>
            <NavBarWrapper>
                <NavBar />
            </NavBarWrapper>
            <MobileMenuButton onClick={toggleMenu}>
                <MenuIcon size={18} />
            </MobileMenuButton>
            <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    )
}

export default memo(Header)
