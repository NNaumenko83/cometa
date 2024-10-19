import styled from '@emotion/styled'
import heroBackground from '../../../assets/images/Background_1.png'

export const StyledHero = styled.section`
    /* height: 100vh; */
    display: flex;
    width: 100%;
    background-image: url(${heroBackground});
    background-size: cover;
    background-position: 50% 15%;
    background-repeat: no-repeat;
`

export const CometaImg = styled.img`
    margin: 90px auto 0;
`
