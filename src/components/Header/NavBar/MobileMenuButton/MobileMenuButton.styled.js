import styled from '@emotion/styled'

export const StyledMobileButton = styled.button`
    width: 46px;
    height: 37px;
    position: fixed;
    left: 0;
    top: 0;
    border-radius: 0px 0px 10px 0px;
    background: rgb(9, 9, 9);
    color: #ffffff;

    @media screen and (min-width: 768px) {
        display: none;
    }
`
