import styled from '@emotion/styled'

export const StyledSpaceBlog = styled.section`
    padding-block: 10.625rem 3.75rem;
    position: relative;
    z-index: 3;
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

    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.22;

    border-radius: 1.75rem;
    background: rgb(255, 48, 141);

    @media screen and (min-width: 678px) {
        width: 11.6875rem;
        height: 4.5625rem;
        padding: 1.75rem;

        font-family: Inter;
        font-size: 24px;
        line-height: 1.2;
    }
`

export const RocketBigImg = styled.img`
    position: absolute;
    left: 0;
    top: -18%;
    z-index: 1;

    @media screen and (min-width: 768px) {
        width: 477px;
        top: -40%;
    }
`
export const RocketSmallImg = styled.img`
    position: absolute;
    bottom: -20%;
    right: 16px;

    @media screen and (min-width: 768px) {
        right: 120px;
        top: 50%;
        width: 380px;
    }
`
export const TriangleBigImg = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
    width: 100px;

    @media screen and (min-width: 768px) {
        width: 250px;
        top: 10%;
    }
`
export const TriangleSmallImg = styled.img`
    position: absolute;
    right: 16px;

    @media screen and (min-width: 768px) {
        top: 50%;
        width: 56px;
    }
`
export const CometaImage = styled.img`
    position: relative;
    width: 100px;
    z-index: 3;
    @media screen and (min-width: 768px) {
        width: 184px;
    }
`
