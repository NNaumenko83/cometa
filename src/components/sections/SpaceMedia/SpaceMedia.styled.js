import styled from '@emotion/styled'

export const StyledSpaceMedia = styled.section`
    position: relative;
    z-index: 3;
`

export const ContentWrapper = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding-block: 7.5rem 3.75rem;
`

export const TitleCometaWrapper = styled.div`
    display: flex;
    gap: 1.125rem;
    align-items: center;
    margin-block-end: 1.5rem;
`

export const SpaceMediaArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5625rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 1.25rem;
    }
`

export const SpaceMediaArticleText = styled.p`
    font-size: 14px;
    line-height: 1.5;
    text-align: left;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`

export const ImgAndReadMoreLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-block-end: 0.25rem;
`
export const ReadMoreLink = styled.a`
    font-family: Inter;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
`

export const CometaImage = styled.img`
    position: relative;
    width: 80px;
    z-index: 3;
    @media screen and (min-width: 768px) {
        width: 184px;
    }
`

export const ImgWrapper = styled.div`
    @media screen and (min-width: 768px) {
        width: 387px;
    }
`
export const StyledImgMedia = styled.img`
    @media screen and (min-width: 768px) {
        width: 387px;
    }
`
