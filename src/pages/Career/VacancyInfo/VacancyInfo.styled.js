import styled from '@emotion/styled'

export const VacancyInfoContainer = styled.div`
    width: 100%;
    max-width: 794px;
    margin-inline: auto;
    margin-block: 36px 274px;

    @media screen and (min-width: 768px) {
        margin-block: 30px 327px;
    }
`

export const JobTitle = styled.h1`
    font-size: 40px;
    font-weight: 900;
    text-align: left;

    @media screen and (min-width: 768px) {
        font-size: 60px;
    }
`

export const JobTitleSecondary = styled.h1`
    font-size: 21px;
    font-weight: 500;
    margin-block-end: 28px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        margin-block-end: 20px;
    }
`

export const VacancyDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`

export const OfferList = styled.ul`
    li {
        list-style: disc;
        margin-left: 5px;
    }
`

export const CardLinkSendCV = styled.a`
    width: 104px;
    height: 31px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    background: rgb(255, 48, 141);
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    margin-inline-start: auto;
    &:hover {
        opacity: 0.8;
    }
`
