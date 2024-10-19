import styled from '@emotion/styled'

export const StyledCard = styled.div`
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
    border-radius: 16px;
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

        border: 1px solid red;
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
`

export const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-block: 10px;
`

export const CardButton = styled.button`
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
    &:hover {
        opacity: 0.8;
    }
`
export const ReadMoreLink = styled.a`
    /* color: rgb(255, 255, 255); */
    /* font-family: League Spartan, sans-serif; */
    font-size: 16px;
    text-align: left;
`
