import styled from '@emotion/styled'

export const CardsContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`
