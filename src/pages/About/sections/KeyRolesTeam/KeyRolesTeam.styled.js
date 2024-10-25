import styled from '@emotion/styled'

export const StyledKeyRolesTeam = styled.section`
    padding-block-start: 6.25rem;
    position: relative;
    @media screen and (min-width: 48rem) {
        padding-block-start: 9.375rem;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15.125rem;
`

export const Text = styled.p`
    font-size: 1rem;
    line-height: 1.4;
    text-align: center;
    max-width: 36.875rem;
    margin: 0 auto;
    @media screen and (min-width: 48rem) {
        font-size: 1.125rem;
    }
`

export const PhotoGrid = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    @media screen and (min-width: 48rem) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap-columm: 0.375rem;
        gap-row: 1.25rem;
    }
`

export const PhotoItem = styled.li`
    width: 100%;
    @media screen and (min-width: 48rem) {
        flex-basis: 45%;
        display: flex;
        gap: 13px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const StyledTriangleImg = styled.img`
    display: none;
    @media screen and (min-width: 48rem) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }
`

export const TitleWrapper = styled.div`
    color: rgb(255, 48, 141);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    margin-block: 0.3125rem 1.25rem;
`

export const ImgWrapper = styled.div`
    padding-inline: 2.6875rem;

    @media screen and (min-width: 48rem) {
        padding-inline: 0;
        flex-basis: 45%;
    }
`

export const Description = styled.div`
    margin-block-end: 1.5rem;
    @media screen and (min-width: 48rem) {
        /* margin-block-end: 5.0625rem; */
    }
`

export const LinkedInLink = styled.a`
    color: rgb(255, 48, 141);

    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;

    text-align: left;
    text-decoration-line: underline;
`

export const DescriptionWrapper = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        justify-content: center;
    }
`
