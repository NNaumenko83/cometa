import { StyledSharedLink } from './SharedLink.styled'

/* eslint-disable react/prop-types */

const SharedLink = ({ children, to }) => {
    return (
        <StyledSharedLink href={to} target="_blank">
            {children}
        </StyledSharedLink>
    )
}

export default SharedLink
