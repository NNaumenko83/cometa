/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../../../constants/navBarLinks'
import {
    Sidebar,
    Backdrop,
    // BackButtonIcon,
    LogoLink,
    MenuAndAuthButtonsWrapper,
    LinksWrapper,
    AuthButtonsWrapper,
    LoginButton,
    SignUpButton,
} from './MobileMenu.styled'

import PersonIcon from '@mui/icons-material/Person'

import CometLogo from '../../../../assets/images/CimetaLogoMobileMenu.png'
import CustomMobileLink from './CustomMobileLink/CustomMobileLink'

// import { useState } from 'react'
// import AuthModal from '../../../AuthModal/AuthModal'

const menuVariants = {
    open: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
    closed: {
        x: '-100%',
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
}

const linkVariants = {
    open: i => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: i * 0.15,
            duration: 0.3,
        },
    }),
    closed: {
        opacity: 0,
        x: -25,
        transition: {
            type: 'tween',
            duration: 0.3,
        },
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

    //  ;<CustomLink to={`/${link.url}`}>{link.title}</CustomLink>

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
                            <LogoLink to="/" onClick={toggleMenu}>
                                <img src={CometLogo} alt={CometLogo} width={170} />
                            </LogoLink>

                            <MenuAndAuthButtonsWrapper>
                                <LinksWrapper>
                                    {navLinks.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            custom={index}
                                            variants={linkVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            onClick={toggleMenu}
                                        >
                                            <CustomMobileLink to={`/${item.url}`}>{item.title}</CustomMobileLink>
                                        </motion.div>
                                    ))}
                                </LinksWrapper>
                                <AuthButtonsWrapper>
                                    <SignUpButton onClick={() => console.log('Click sign up')}>Sign Up</SignUpButton>
                                    <LoginButton onClick={() => console.log('Click sign in')}>
                                        Login <PersonIcon />
                                    </LoginButton>
                                </AuthButtonsWrapper>
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
