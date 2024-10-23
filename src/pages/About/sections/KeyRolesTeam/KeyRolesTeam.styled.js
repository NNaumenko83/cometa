import styled from '@emotion/styled'

export const StyledKeyRolesTeam = styled.section`
    padding-block: 100px 350px;
    @media screen and (min-width: 768px) {
        padding-blockt: 150px 350px;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 242px;
`

export const Text = styled.p`
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
    max-width: 590px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`

export const PhotoGrid = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const PhotoItem = styled.li`
    width: 100%;
    @media screen and (min-width: 768px) {
        flex-basis: 20%;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
