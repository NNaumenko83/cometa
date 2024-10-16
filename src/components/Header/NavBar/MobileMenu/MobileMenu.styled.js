import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Sidebar = styled(motion.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 20px;

    top: 0;
    left: 0;
    width: 75%;
    max-width: 31.25rem;

    z-index: 1100;

    background-color: #ffffff;

    color: #000000;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 0.5rem; */
`

export const MenuLink = styled(motion.a)`
    display: block;
    padding: 12px 20px;
    padding: 0.5rem 0;
    /* text-decoration: none; */
    cursor: pointer;

    border-bottom: 1px solid rgb(233, 233, 233);

    &:hover {
        color: #f0f0f0;
    }
`

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 1000;
`

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    left: 6px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1101;
`

export const SidebarTitle = styled.h2`
    line-height: 1.1;
`
export const LogoLink = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-end: 40px;
`

export const MenuAndAuthButtonsWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const AuthButtonsWrapper = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    flex-grow: 1;
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;

    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.18;

    @media screen and (min-width: 370px) {
        font-size: 16px;
    }
`

export const SignUpButton = styled(Button)`
    background: none;
    border-bottom: 1px solid #200540;
    color: rgb(9, 9, 9);
`

export const LoginButton = styled(Button)`
    gap: 0.625rem;
    border-radius: 0.75rem;
    border-radius: 0.75rem;
    backdrop-filter: blur(1.25rem);
    background: rgb(9, 9, 9);

    color: rgb(255, 255, 255);
`
