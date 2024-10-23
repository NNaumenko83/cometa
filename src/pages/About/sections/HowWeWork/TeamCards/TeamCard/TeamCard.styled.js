import styled from '@emotion/styled'

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 33%;
    gap: 20px;

    @media screen and(min-width:768px) {
        gap: 30px;
    }
`

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    color: #ff0080;
    margin-top: 10px;
    text-align: left;

    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
`

export const CardText = styled.p`
    text-align: center;
    font-size: 1rem;
    margin: 10px 0;
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
`
export const ImgWrapper = styled.div`
    width: 100%;
    display: flex;
    aspect-ratio: 1/1;
    justify-content: center;
`

export const TitleTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    @media screen and(min-width:768px) {
        gap: 20px;
    }
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
