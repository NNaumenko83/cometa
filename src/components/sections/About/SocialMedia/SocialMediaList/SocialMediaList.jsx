import { socialMediaLinksForAbout } from '../../../../../constants/socialMediaLinksForAbout'
import { StyledList } from './SocialMediaList.styled'

const SocialMediaList = () => {
    return (
        <StyledList>
            {socialMediaLinksForAbout.map(link => (
                <li key={link.socialName}>
                    <a href={link.socialUrl} target="_blank" rel="noopener noreferrer">
                        {link.socialName}
                    </a>
                </li>
            ))}
        </StyledList>
    )
}

export default SocialMediaList
