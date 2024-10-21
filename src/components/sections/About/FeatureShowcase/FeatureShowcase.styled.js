import styled from '@emotion/styled'

export const FeatureShowcaseWrapper = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: space-around;
    padding-block-end: 35px;

    @media screen and (min-width: 768px) {
        width: 503px;
        margin-inline: auto;
    }
`
export const FeaturesList = styled.ul`
    font-size: 1.375rem;
    line-height: 1.3;
    letter-spacing: 0%;

    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
`
export const FeaturesWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const StyledFeaturesItem = styled.li`
    display: flex;
    gap: 1.25rem;
`
export const StyledCometaImg = styled.img`
    width: 138px;
    @media screen and (min-width: 768px) {
        width: 180px;
    }
`
