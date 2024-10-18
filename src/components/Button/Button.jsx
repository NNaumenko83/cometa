import { StyledButton } from './Button.styled'

/* eslint-disable react/prop-types */

const Button = ({ children }) => {
    return (
        <StyledButton
            type="button"
            onClick={() => {
                console.log('Click')
            }}
        >
            {children}
        </StyledButton>
    )
}

export default Button
