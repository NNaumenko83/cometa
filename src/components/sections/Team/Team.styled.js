import styled from '@emotion/styled'
import Background from '../../../assets/images/Background_3_mobile.png'

export const StyledTeam = styled.section`
    position: relative;
    ::before {
        content: '';
        position: absolute;
        top: 20%;
        z-index: 2;
        display: block;
        width: 100%;
        height: 2430px;

        filter: blur(57.3px);
        background: rgba(9, 9, 9, 0.6);
    }

    ::after {
        content: '';
        position: absolute;
        top: 20%;
        z-index: 1;
        display: block;
        width: 100%;
        height: 2430px;

        background-image: url(${Background});
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.125rem;
`

export const BottomButtonText = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;

    text-align: center;
`
export const ButtontextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`
