import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_5_mobile.png'

export const StyledCareer = styled.section`
    padding-block-end: 75px;
    position: relative;
    ::before {
        content: '';
        position: absolute;
        top: -10%;
        z-index: 2;
        display: block;
        width: 110%;
        height: 2000px;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: -10%;
        z-index: 1;
        display: block;
        width: 120%;
        height: 2000px;

        background-image: url(${Background});
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`
export const CareerContentWrapper = styled.div`
    position: relative;
    z-index: 3;
`
export const TitleLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CareerLink = styled.a`
    width: 44.28px;
    height: 40.56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 2px 8px 11.9px 0px rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(20px);
    background: rgb(255, 48, 141);
`
