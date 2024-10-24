import styled from '@emotion/styled'

export const StyledAbout = styled.section`
    padding-block-start: 60px;
    position: relative;
`

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 590px;
    margin-inline: auto;
    margin-block-end: 100px;

    @media screen and (min-width: 768px) {
        margin-block-end: 50px;
    }
`
export const StyledTriangleImg = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        top: 267px;
        left: 0;
    }
`
