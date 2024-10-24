import styled from '@emotion/styled'
import DesktopBg from '../../assets/images/AboutPage/BgDesktop.png'
import MobileBg from '../../assets/images/AboutPage/BgMobile.png'

export const StyledAboutPage = styled.div`
    background-image: url(${MobileBg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 768px) {
        background-image: url(${DesktopBg});
    }
`
