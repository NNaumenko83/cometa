import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link, {
    shouldForwardProp: prop => prop !== '$isActive',
})`
    height: 100%;
    width: 100%;
    padding: 0.75rem 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ $isActive }) => ($isActive ? '#f3308d' : '#ffffff')};
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: ${({ $isActive }) => ($isActive ? 'hotpink' : 'gray')};
    }
`
