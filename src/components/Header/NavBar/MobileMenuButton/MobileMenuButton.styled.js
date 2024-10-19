import styled from '@emotion/styled'

export const StyledMobileButton = styled.button`
    width: 2.875rem;
    height: 2.3125rem;
    position: fixed;
    left: 0;
    top: 0;
    border-radius: 0rem 0rem 0.625rem 0rem;
    background: rgb(9, 9, 9);
    color: #ffffff;

    @media screen and (min-width: 48rem) {
        display: none;
    }
`
