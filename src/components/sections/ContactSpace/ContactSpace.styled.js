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
    display: inline-block;
    background-color: #ff4081;
    color: white;
    padding: 0.9375rem 1.875rem;
    border-radius: 1.875rem;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    width: 18.75rem;
    transition: background-color 0.3s ease;
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
    background-color: #ff4081;
    color: white;
    padding: 0.9375rem 1.875rem;
    border-radius: 1.875rem;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    width: 18.75rem;
`
