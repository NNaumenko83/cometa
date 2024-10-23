/* eslint-disable react/prop-types */
import CustomLink from './CustomLink/CustomLink'
import { ListItem, StyledList } from './NavLinksList.styled'

const NavLinksList = ({ links }) => {
    return (
        <StyledList>
            {links.map(link => (
                <ListItem key={link.title}>
                    <CustomLink to={`/${link.url}`}>{link.title}</CustomLink>
                </ListItem>
            ))}
        </StyledList>
    )
}

export default NavLinksList
