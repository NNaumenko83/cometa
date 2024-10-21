import styled from '@emotion/styled'

export const StyledWorkSpace = styled.section`
    position: relative;
    z-index: 3;
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
