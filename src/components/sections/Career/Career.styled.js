import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_5_mobile.png'

export const StyledCareer = styled.section`
    padding-block: 60px 75px;
    position: relative;
    ::before {
        content: '';
        position: absolute;
        top: -10%;
        z-index: 2;
        display: block;
        width: 100%;
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
        width: 100%;
        height: 2000px;

        background-image: url(${Background});
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 768px) {
    }
`
export const CareerContentWrapper = styled.div`
    position: relative;
    z-index: 3;
`
export const TitleLinkWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-block-end: 17px;
    @media screen and (min-width: 768px) {
        justify-content: center;
        gap: 10px;
        margin-block-end: 21px;
    }
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

    @media screen and (min-width: 768px) {
        width: 48px;
        height: 48px;
        padding: 8px 12px 8px 12px;

        border-radius: 28px;
        background: rgb(255, 48, 141);
    }
`
