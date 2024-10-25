import styled from '@emotion/styled'

export const StyledCareerList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: stretch;
    }
`
