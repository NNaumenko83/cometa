import styled from '@emotion/styled'

export const StyledTemList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 36px;

    @media screen and (min-width: 768px) {
        margin-block-start: 20px;
        flex-direction: row;
        gap: 20px;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`
