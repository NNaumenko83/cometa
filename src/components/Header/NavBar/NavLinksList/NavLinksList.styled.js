import styled from '@emotion/styled'

export const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 0.625rem;
`
export const ListItem = styled.li`
    flex-basis: 7.375rem;
    height: 2.3125rem;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-grow: 1;

    border-radius: 0.75rem;
    backdrop-filter: blur(1.25rem);
    background: rgb(9, 9, 9);

    @media screen and (min-width: 51.875rem) {
        /* font-size: 0.75rem; */
    }
`
export const Link = styled.a`
    height: 100%;
    width: 100%;
    padding: 0.75rem 0.625rem 0.75rem 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
