import { StyledMobileButton } from './MobileMenuButton.styled'

// eslint-disable-next-line react/prop-types
const MobileMenuButton = ({ children, onClick }) => {
    return <StyledMobileButton onClick={onClick}>{children}</StyledMobileButton>
}

export default MobileMenuButton
