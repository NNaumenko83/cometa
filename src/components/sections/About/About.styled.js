import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_3_mobile.png'

export const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        z-index: 2;
        display: block;
        width: 100%;
        height: 1500px;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 1500px;

        background-image: url(${Background});
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`

export const ImgTitleWrapper = styled.div`
    margin-inline: auto;
    display: flex;

    gap: 0.625rem;
    justify-content: center;
    align-items: center;

    border: 1px solid tomato;
    @media screen and (min-width: 768px) {
        gap: 1.75rem;
    }
`
export const CometaImage = styled.img`
    position: relative;
    width: 140px;
    z-index: 3;
    @media screen and (min-width: 768px) {
        width: 184px;
    }
`
