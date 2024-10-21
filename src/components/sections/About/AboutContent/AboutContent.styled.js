import styled from '@emotion/styled'

export const Wrapper = styled.div`
    margin-block-start: 1.375rem;
    max-width: 996px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;
    z-index: 3;

    @media screen and (min-width: 768px) {
        margin-block-start: 4.5rem;
        margin-inline: auto;
        flex-direction: row;
    }
`
export const Title = styled.h3`
    font-size: 32px;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
`

export const TitlePink = styled.span`
    color: #ff308d;
`

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
`

export const TitleBreak = styled.br`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const FirstPartAboutContent = styled.div`
    flex-basis: 50%;
`

export const SecondPartAboutContent = styled.div`
    flex-basis: 50%;
`
