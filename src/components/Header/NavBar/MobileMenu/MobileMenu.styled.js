import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Sidebar = styled(motion.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 2.5625rem;
    top: 1.875rem;
    left: 1.25rem;
    width: 75%;
    max-width: 31.25rem;
    height: 85%;
    border-radius: 14px;

    z-index: 1100;
    padding: 1.25rem 1.5rem;
    font-family: 'Archivo-Bold';
    color: #ffffff;
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const MenuLink = styled(motion.a)`
    display: block;

    padding: 0.5rem 0;
    text-decoration: none;
    cursor: pointer;

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
    background: rgba(7, 48, 90, 0.01);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
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
export const LogoLanguagesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5625rem;
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
    color: #200540;
    font-weight: 400;
    line-height: 1.2;
`

export const SignUpButton = styled(Button)`
    background: none;
    border-bottom: 1px solid #200540;
    color: #200540;
`

export const LoginButton = styled(Button)`
    gap: 0.625rem;
    border-radius: 12px;
    background: #fff;
    backdrop-filter: blur(10px);
`
