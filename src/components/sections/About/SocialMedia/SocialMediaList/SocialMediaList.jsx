import { socialMediaLinksForAbout } from '../../../../../constants/socialMediaLinksForAbout'
import { StyledList, StyledItem, StyledLink } from './SocialMediaList.styled'

const SocialMediaList = () => {
    return (
        <StyledList>
            {socialMediaLinksForAbout.map(link => (
                <StyledItem key={link.socialName}>
                    <StyledLink href={link.socialUrl} /* target="_blank" rel="noopener noreferrer nofollow" */>
                        {link.socialName}
                    </StyledLink>
                </StyledItem>
            ))}
        </StyledList>
    )
}

export default SocialMediaList
