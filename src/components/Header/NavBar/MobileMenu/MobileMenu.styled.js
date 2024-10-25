import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Sidebar = styled(motion.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 1.25rem;

    top: 0;
    left: 0;
    width: 75%;
    max-width: 500px;

    z-index: 1100;

    background-color: #ffffff;

    color: #000000;

    @media screen and (min-width: 48rem) {
        display: none;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 8px; */
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
    top: 0.625rem;
    left: 0.375rem;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 1101;
`

export const SidebarTitle = styled.h2`
    line-height: 1.1;
`
export const LogoLink = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-end: 2.5rem;
`

export const MenuAndAuthButtonsWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const AuthButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    flex-grow: 1;
    display: flex;
    padding: 0.75rem 1.25rem;
    justify-content: center;
    align-items: center;

    font-family: Inter, sans-serif;
    font-size: 0.625rem;
    font-weight: 400;
    line-height: 1.18;

    @media screen and (min-width: 23.125rem) {
        font-size: 1rem;
    }
`

export const SignUpButton = styled(Button)`
    background: none;
    border-bottom: 0.0625rem solid #200540;
    color: rgb(9, 9, 9);
`

export const LoginButton = styled(Button)`
    gap: 10px;
    border-radius: 12px;
    border-radius: 12px;
    backdrop-filter: blur(20px);
    background: rgb(9, 9, 9);

    color: rgb(255, 255, 255);
`
