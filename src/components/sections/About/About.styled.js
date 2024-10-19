import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_2_mobile.png'

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
        width: 110%;
        height: 1200px;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        z-index: 1;
        display: block;
        width: 110%;
        height: 1200px;

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
    align-items: center;
`
export const CometaImage = styled.img`
    position: relative;
    z-index: 3;
`
