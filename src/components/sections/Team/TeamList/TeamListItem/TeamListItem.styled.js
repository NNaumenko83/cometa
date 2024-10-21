import styled from '@emotion/styled'

export const MemberCard = styled.li`
    text-align: center;

    @media screen and (min-width: 768px) {
        flex-basis: 33%;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 48px;
    overflow: hidden;
`

export const MemberImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 32%;
`

export const MemberPosition = styled.h3`
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    color: rgb(255, 255, 255);

    font-size: 22px;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
`

export const MemberDescription = styled.p`
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;

    text-align: center;
`
