/* eslint-disable react/prop-types */

import { useNavigate, useLocation, useMatch } from 'react-router-dom'
import { StyledMobileLink } from './CustomMobileLink.styled'

const CustomMobileLink = ({ children, to, ...props }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const match = useMatch(to)

    const handleClick = event => {
        event.preventDefault()

        const [path, hash] = to.split('#')

        if (location.pathname === path && hash) {
            const targetElement = document.getElementById(hash)
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            navigate(to)
        }
    }

    return (
        <StyledMobileLink to={to} $isActive={!!match} onClick={handleClick} {...props}>
            {children}
        </StyledMobileLink>
    )
}

export default CustomMobileLink
