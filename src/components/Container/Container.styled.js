import styled from '@emotion/styled'

export const ContainerStyled = styled.div`
    margin: 0 auto;

    flex-grow: 1;
    width: 100%;
    max-width: 76.875rem;
    padding-inline: 1rem;
    position: relative;

    /* border: 0.0625rem solid red; */

    @media screen and (min-width: 48rem) {
        max-width: 1230px;
        padding-inline: 0.9375rem;
    }
`
