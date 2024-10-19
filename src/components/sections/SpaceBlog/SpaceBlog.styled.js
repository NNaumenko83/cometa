import styled from '@emotion/styled'

export const StyledSpaceBlog = styled.section`
    padding-block: 10.625rem 3.75rem;
    position: relative;
`

export const ContentWrapper = styled.div`
    display: flex;
    padding-block: 4.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
`

export const TitleCometaWrapper = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
`
export const BlogLink = styled.a`
    width: 8.4375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.125rem;

    border-radius: 1.75rem;
    background: rgb(255, 48, 141);
`

export const RocketBigImg = styled.img`
    position: absolute;
    left: 0;
    top: -18%;
    z-index: 1;
`
export const RocketSmallImg = styled.img`
    position: absolute;
    bottom: -20%;
    right: 16px;
`
export const TriangleBigImg = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
`
export const TriangleSmallImg = styled.img`
    position: absolute;
    right: 16px;
`
