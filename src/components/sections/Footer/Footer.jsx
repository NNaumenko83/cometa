import {
    StyledFooter,
    ButtonGroup,
    SocialIconWrapper,
    SocialLinksList,
    SocialCometaImg,
    SocialIconLink,
    FooterInfo,
    SocialMediaWrapper,
    BrandContainer,
    Title,
    SolutionWrapper,
    PartnersWrapper,
} from './Footer.styled'

import InstagramCometa from '../../../assets/images/FooterImages/InstaCometa.png'
import TikTokCometa from '../../../assets/images/FooterImages/TikTokCometa.png'
import TwiterXCometa from '../../../assets/images/FooterImages/TwiterXCometa.png'
import YouTubeCometa from '../../../assets/images/FooterImages/YouTubeCometa.png'
import TelegramCometa from '../../../assets/images/FooterImages/TelegramCometa.png'
import DiscordCometa from '../../../assets/images/FooterImages/DiscordCometa.png'
import MessengerCometa from '../../../assets/images/FooterImages/MessengerCometa.png'

import { PiInstagramLogo } from 'react-icons/pi'
import { IoLogoTiktok } from 'react-icons/io5'
import { BsTwitterX } from 'react-icons/bs'
import { FaYoutube, FaTelegram, /* FaDiscord, */ FaFacebookF, FaLinkedinIn /* FaFacebookMessenger */ } from 'react-icons/fa'

import Container from '../../Container/Container'
// import { FaLinkedinIn } from 'react-icons/fa'

const socialIcons = [
    { icon: <FaLinkedinIn size={30} />, alt: 'LinkedIn', cometaImg: DiscordCometa, url: 'https://www.linkedin.com/company/cometspace/' },
    { icon: <FaTelegram size={30} />, alt: 'Telegram', cometaImg: TelegramCometa, url: 'https://t.me/cometspace_company' },
    { icon: <FaYoutube size={30} />, alt: 'YouTube', cometaImg: YouTubeCometa, url: 'https://www.youtube.com/@CometaSpace' },
    { icon: <BsTwitterX size={30} />, alt: 'Twitter', cometaImg: TwiterXCometa, url: 'https://x.com/CometSpace_Dev' },
    { icon: <IoLogoTiktok size={30} />, alt: 'TikTok', cometaImg: TikTokCometa, url: 'https://www.tiktok.com/@cometa_space' },
    {
        icon: <PiInstagramLogo size={30} />,
        alt: 'Instagram',
        cometaImg: InstagramCometa,
        url: 'https://www.instagram.com/cometspace_company/',
    },
    {
        icon: <FaFacebookF size={30} />,
        alt: 'Facebook',
        cometaImg: MessengerCometa,
        url: 'https://www.facebook.com/people/Poomb-Creatures-Community/61561848287998/',
    },
]

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterInfo>
                    <BrandContainer>
                        <h3>epam</h3>
                        <h3>teat io</h3>
                        <h3>reliable ai lab</h3>
                    </BrandContainer>

                    <SolutionWrapper>
                        <Title>SOLUTIONSHUB</Title>
                        <p>Explore our enterprise software products, open source solutions and accelerators on EPAM SolutionsHub.</p>
                    </SolutionWrapper>

                    <PartnersWrapper>
                        <Title>PARTNERS</Title>
                        <p>Learn more about our Alliances and Partnerships.</p>
                    </PartnersWrapper>

                    <ButtonGroup>
                        <button>Career</button>
                        <button>Submit Guest Post</button>
                        <button>Blog</button>
                        <button>Media</button>
                    </ButtonGroup>
                </FooterInfo>

                <SocialMediaWrapper>
                    <SocialLinksList>
                        {socialIcons.map(({ icon, cometaImg, alt, url }, index) => (
                            <SocialIconWrapper key={index}>
                                <SocialCometaImg src={cometaImg} alt="Comet background" width={78} />
                                <SocialIconLink href={url} aria-label={alt} target="_blank" rel="noopener noreferrer nofollow">
                                    {icon}
                                </SocialIconLink>
                            </SocialIconWrapper>
                        ))}
                    </SocialLinksList>
                </SocialMediaWrapper>
            </Container>
        </StyledFooter>
    )
}

export default Footer
