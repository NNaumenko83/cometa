import styled from '@emotion/styled'

export const StyledSpaceMedia = styled.section`
    border: 1px solid red;
`

export const ContentWrapper = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding-block: 120px 60px;
`

export const TitleCometaWrapper = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
    margin-block-end: 24px;
`

export const SpaceMediaArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`

export const SpaceMediaArticleText = styled.p`
    line-height: 1.5;
    text-align: left;
`

export const ReadMoreLinkWrapper = styled.div`
    padding-block-end: 4px;
`
export const ReadMoreLink = styled.a`
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0%;
    text-align: center;
`
