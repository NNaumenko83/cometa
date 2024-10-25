import styled from '@emotion/styled'

export const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;

    font-size: 0.875rem;

    line-height: 1.5;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        margin-inline: auto;
        width: 44.375rem;

        font-size: 1.125rem;
    }
`

export const StyledItem = styled.li`
    transition: all 250ms linear;
    :hover {
        transform: scale(1.1);
        color: #f3308d;
    }
`

export const StyledLink = styled.a`
    display: block;
    height: 100%;
`
