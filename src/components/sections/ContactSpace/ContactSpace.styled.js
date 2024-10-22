import styled from '@emotion/styled'

export const StyledContactSpace = styled.section`
    position: relative;
    z-index: 3;
    padding-block: 2.8125rem 7.8125rem;

    @media screen and (min-width: 768px) {
        padding-block: 5.3125rem 8.75rem;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 550px;
    margin-inline: auto;
    position: relative;
    z-index: 5;
`

export const ContactDescription = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
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

    @media screen and (min-width: 768px) {
        font-size: 1rem;
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

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`

export const ContactsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.625rem;
    width: 100%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`

export const StyledLeftTriangleImg = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        left: 102px;
        top: 50%;
        transform: translateY(-50%);
    }
`
export const StyledRightTriangleImg = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        position: absolute;
        display: block;
        right: 102px;
        top: 50%;
        transform: translateY(-50%);
    }
`
