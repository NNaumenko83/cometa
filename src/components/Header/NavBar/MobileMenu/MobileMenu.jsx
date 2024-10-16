/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../../../constants/navBarLinks'
import {
    Sidebar,
    MenuLink,
    Backdrop,
    // BackButtonIcon,
    SidebarTitle,
    LogoLanguagesWrapper,
    MenuAndAuthButtonsWrapper,
    LinksWrapper,
    // AuthButtonsWrapper,
    // LoginButton,
    // SignUpButton,
} from './MobileMenu.styled'

// import { useState } from 'react'
// import AuthModal from '../../../AuthModal/AuthModal'

const menuVariants = {
    open: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
    closed: {
        x: '-100%',
    },
}

const linkVariants = {
    open: i => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.15,
        },
    }),
    closed: {
        opacity: 0,
        x: -25,
    },
}

const MobileMenu = ({ isOpen, toggleMenu }) => {
    // const [isAuthModalOpen, setAuthModalOpen] = useState(false)
    // const [authMode, setAuthMode] = (useState < 'login') | ('register' > 'login')

    // const openLoginModal = () => {
    //     setAuthMode('login')
    //     setAuthModalOpen(true)
    // }

    // const openRegisterModal = () => {
    //     setAuthMode('register')
    //     setAuthModalOpen(true)
    // }

    // const closeModal = () => {
    //     setAuthModalOpen(false)
    // }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <Backdrop
                            as={motion.div}
                            onClick={toggleMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <Sidebar initial="closed" animate="open" exit="closed" variants={menuVariants}>
                            <LogoLanguagesWrapper>
                                <SidebarTitle>{`$COGA`}</SidebarTitle>
                            </LogoLanguagesWrapper>

                            <MenuAndAuthButtonsWrapper>
                                <LinksWrapper>
                                    {navLinks.map((item, index) => (
                                        <MenuLink
                                            key={item.title}
                                            href={`#${item.url}`}
                                            custom={index}
                                            variants={linkVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            onClick={toggleMenu}
                                        >
                                            {item.title}
                                        </MenuLink>
                                    ))}
                                </LinksWrapper>
                                {/* <AuthButtonsWrapper> */}
                                {/* <SignUpButton onClick={openRegisterModal}>Sign Up</SignUpButton> */}
                                {/* <LoginButton onClick={openLoginModal}> */}
                                Login{/*  <BsFillPersonFill size={18} /> */}
                                {/* </LoginButton> */}
                                {/* </AuthButtonsWrapper> */}
                            </MenuAndAuthButtonsWrapper>
                        </Sidebar>
                    </>
                )}
            </AnimatePresence>
            {/* {isAuthModalOpen && <AuthModal closeModal={closeModal} isRegistering={authMode === 'register'} />} */}
        </>
    )
}

export default MobileMenu
