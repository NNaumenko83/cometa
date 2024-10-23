/* eslint-disable react/prop-types */
import { ListItem, StyledList, StyledLink } from './NavLinksList.styled'

const NavLinksList = ({ links }) => {
    return (
        <StyledList>
            {links.map(link => (
                <ListItem key={link.title}>
                    <StyledLink to={`/${link.url}`}>{link.title}</StyledLink>
                </ListItem>
            ))}
        </StyledList>
    )
}

export default NavLinksList
