import styled from '@emotion/styled'

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 9997;
    background-color: transparent;
    position: fixed;
    top: 0%;
    left: 0;
    right: 0;
`

export const NavBarWrapper = styled.div`
    padding-top: 0.375rem;
    flex-grow: 1;
    display: flex;
    justify-content: center;
`

export const MobileButtonWrapper = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        padding-bottom: 8px;
    }
`

export const MobileButtonWrapperLeft = styled(MobileButtonWrapper)``
export const MobileButtonWrapperRight = styled(MobileButtonWrapper)`
    justify-content: flex-end;
`
