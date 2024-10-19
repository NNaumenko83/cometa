import styled from '@emotion/styled'

export const StyledContactSpace = styled.section`
    padding-block: 2.8125rem 7.8125rem;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`

export const ContactDescription = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
`

export const ContactButton = styled.a`
    width: 270px;
    height: 39px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-weight: 700;

    text-align: center;
    text-decoration-line: underline;

    border-radius: 18px;
    background: rgb(255, 48, 141);
    &:hover {
        background-color: #e03370;
    }
`

export const OfficeTitle = styled.h2`
    font-size: 1.875rem;
    font-weight: 400;
    text-align: center;
`

export const OfficeLocation = styled.div`
    width: 270px;
    height: 39px;
    /* Auto layout */
    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 18px;
    background: rgb(255, 48, 141);
    font-size: 14px;
    font-weight: 700;

    text-align: center;
`
