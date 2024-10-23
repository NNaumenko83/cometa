/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link, useMatch } from 'react-router-dom'
import { StyledLink } from './CustomLink.styled'

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch(to)
    return (
        <StyledLink to={to} $isActive={!!match}>
            {children}
        </StyledLink>
    )
}

export default CustomLink
