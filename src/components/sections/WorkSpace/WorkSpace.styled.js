import styled from '@emotion/styled'
import backgroundDesktop from '../../../assets/images/Background_3.png'

export const StyledWorkSpace = styled.section`
    position: relative;

    @media screen and (min-width: 768px) {
        ::before {
            content: '';
            position: absolute;
            top: -250px;
            z-index: 0;
            display: block;
            width: 100%;
            height: 2425px;

            background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) 200px, rgba(9, 9, 9, 0.6) 300px);
            filter: blur(57.3px);
        }

        ::after {
            content: '';
            position: absolute;
            top: -150px;
            z-index: -1;
            display: block;
            width: 100%;
            height: 2325px;

            background-image: url(${backgroundDesktop});
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`

export const WorkSpaceContent = styled.div`
    padding-block: 120px 120px;
    display: flex;
    flex-direction: column;
    gap: 3.125rem;
    @media screen and (min-width: 768px) {
        padding-block-end: 256px;
    }
`

export const StyledTriangleImg = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
    }
`
export const StyledCometaImg = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        top: 23%;
        right: 5%;
    }
`
