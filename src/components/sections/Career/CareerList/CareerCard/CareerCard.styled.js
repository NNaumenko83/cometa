import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const StyledCard = styled.li`
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 329px;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;

    overflow: hidden;
    position: relative;

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 368.96px;
        height: 157.03px;

        background: rgba(9, 9, 9, 0.6);

        filter: blur(80px);

        -webkit-filter: blur(80px);
        -moz-filter: blur(80px);
        -ms-filter: blur(80px);
        -o-filter: blur(80px);

        position: absolute;
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const CardContent = styled.div`
    margin-block-start: 1.875rem;
    padding-inline: 15px;
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media screen and (min-width: 768px) {
        flex-grow: 1;
        justify-content: space-between;
    }
`

export const CardTitle = styled.h3`
    position: absolute;
    width: 300px;
    height: 26px;
    bottom: 10px;
    right: 15px;
    z-index: 2;

    font-size: 28px;
    font-weight: 900;
    text-align: right;
    text-transform: uppercase;
`

export const CardDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    text-align: left;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`

export const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-block: 10px;
`

export const CardLinkSendCV = styled.a`
    width: 104px;
    height: 31px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    background-color: rgb(255, 48, 141);
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    transition: all 250ms linear;
    &:hover {
        background-color: #ffffff;
        color: rgb(255, 48, 141);
    }
`
export const ReadMoreLink = styled(Link)`
    font-size: 16px;
    text-align: left;
    transition: all 250ms linear;
    &:hover {
        color: rgb(255, 48, 141);
    }
`
