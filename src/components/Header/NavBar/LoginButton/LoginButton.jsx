import { memo } from 'react'
import { StyledLoginButton } from './LoginButton.styled'

const LoginButton = () => {
    return <StyledLoginButton type="button">Login</StyledLoginButton>
}

export default memo(LoginButton)
