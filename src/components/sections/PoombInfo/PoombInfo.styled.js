import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_4_mobile.png'

export const StyledPoombInfoSection = styled.section`
    padding-block-start: 7.5rem;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 10%;
        z-index: 2;
        display: block;
        width: 110%;
        height: 2448px;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: 10%;
        z-index: 1;
        display: block;
        width: 110%;
        height: 2448px;

        background-image: url(${Background});
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`
export const TitleTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`
export const ContentWrapper = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 18.75rem;
    align-items: center;
`
export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-block-end: 3.4375rem;
`

export const TigerImg = styled.img`
    position: absolute;
    z-index: 3;
    bottom: 3.4375rem;
`
export const TriangleImg = styled.img`
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 5.375rem;
`
