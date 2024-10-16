/* eslint-disable react/prop-types */
import { ListItem, StyledList, Link } from './NavLinksList.styled'

const NavLinksList = ({ links }) => {
    return (
        <StyledList>
            {links.map(link => (
                <ListItem key={link.title}>
                    <Link href={`#${link.url}`}>{link.title}</Link>
                </ListItem>
            ))}
        </StyledList>
    )
}

export default NavLinksList
