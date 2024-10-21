import styled from '@emotion/styled'

export const SocialWrapper = styled.div`
    position: relative;
    z-index: 3;
    margin-block-start: 20px;
    margin-block-end: 120px;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    @media screen and (min-width: 768px) {
        margin-block-start: 4.5rem;
    }
`
export const TitleSM = styled.h4`
    font-size: 1.375rem;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
`
