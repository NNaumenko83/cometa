import styled from '@emotion/styled'

export const StyledChooseUs = styled.section`
    padding-block: 7.9375rem;
    position: relative;
`

export const ContentWrapper = styled.div`
    max-width: 794px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 150px;
    position: relative;
    z-index: 5;
`

export const ChooseUsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1rem;
    line-height: 1.4;
    @media screen and (min-width: 768px) {
        font-size: 1.125rem;
    }

    li {
        margin-inline-start: 10px;
        list-style: disc;
    }
`

export const ContactInfo = styled.div`
    font-size: 1rem;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        font-size: 1.125rem;
    }
`

export const InfoMailLink = styled.a`
    text-decoration: underline;
`

export const OfficesList = styled.ul`
    font-size: 1rem;
    line-height: 1.4;
    text-align: left;

    @media screen and (min-width: 768px) {
        font-size: 1.125rem;
    }

    li {
        list-style: disc;
    }
`
export const OfficesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const StyledTriangleLeftImg = styled.img`
    display: none;
    @media screen and (min-width: 48rem) {
        display: block;
        position: absolute;
        bottom: 8rem;
        left: 0;
        z-index: 3;
    }
`
export const StyledTriangleRightImg = styled.img`
    display: none;
    @media screen and (min-width: 48rem) {
        display: block;
        position: absolute;
        bottom: 15rem;
        right: 0;
        z-index: 3;
    }
`
