import styled from '@emotion/styled'

export const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
`
export const ListItem = styled.li`
    flex-basis: 118px;
    height: 37px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-grow: 1;

    border-radius: 12px;
    backdrop-filter: blur(20px);
    background: rgb(9, 9, 9);

    @media screen and (min-width: 830px) {
        /* font-size: 12px; */
    }
`
export const Link = styled.a`
    height: 100%;
    width: 100%;
    padding: 12px 10px 12px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
