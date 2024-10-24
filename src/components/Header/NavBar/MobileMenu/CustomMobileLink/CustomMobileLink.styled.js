import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const StyledMobileLink = styled(Link, {
    shouldForwardProp: prop => prop !== '$isActive',
})`
    display: block;
    padding: 0.75rem 1.25rem;
    padding: 8px 0;
    cursor: pointer;

    border-bottom: 0.0625rem solid rgb(233, 233, 233);
    color: ${({ $isActive }) => ($isActive ? '#f3308d' : '#000000')};

    &:hover {
        color: #f0f0f0;
    }
`
