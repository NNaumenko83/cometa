import styled from '@emotion/styled'

export const StyledHowWeWork = styled.section`
    padding-block-start: 100px;
    @media screen and (min-width: 768px) {
        padding-block-start: 70px;
    }
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
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    @media screen and (min-width: 768px) {
        gap: 118px;
    }
`
