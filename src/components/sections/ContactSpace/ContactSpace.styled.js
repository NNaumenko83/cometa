import styled from '@emotion/styled'

export const StyledContactSpace = styled.section`
    padding-block: 45px 125px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContactDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const ContactButton = styled.a`
    display: inline-block;
    background-color: #ff4081;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    width: 300px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #e03370;
    }
`

export const OfficeTitle = styled.h2`
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`

export const OfficeLocation = styled.div`
    background-color: #ff4081;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    width: 300px;
`
