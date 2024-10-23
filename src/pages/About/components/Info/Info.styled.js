import styled from '@emotion/styled'
import { ContainerStyled } from '../../../../components/Container/Container.styled'

export const InfoContainer = styled(ContainerStyled)`
    padding: 0;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 112px;
    }
`

export const Infotext = styled.p`
    font-size: 16px;
    line-height: 1.2;
    text-align: left;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`

export const TitleTextWrapper = styled.div`
    padding-inline: 1rem;
    flex: 1;
    @media screen and (min-width: 768px) {
        margin-block: auto;
        padding-inline: 0;
    }
`

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) {
        order: ${({ $imgPosition }) => ($imgPosition === 'right' ? 1 : 0)};
        flex: 1;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
