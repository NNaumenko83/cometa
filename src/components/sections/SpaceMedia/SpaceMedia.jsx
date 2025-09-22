import SectionTitleBig from '../../SectionTitleBig/SectionTitleBig'

import {
    StyledSpaceMedia,
    ContentWrapper,
    TitleCometaWrapper,
    SpaceMediaArticle,
    SpaceMediaArticleText,
    ReadMoreLink,
    ImgAndReadMoreLinkWrapper,
    CometaImage,
    StyledImgMedia,
    ImgWrapper,
} from './SpaceMedia.styled'
import CometaImg from '../../../assets/images/CometaHero.png'
import MediaImg from '../../../assets/images/SpaceMediaImg.png'
import Container from '../../Container/Container'

const SpaceMedia = () => (
    <StyledSpaceMedia>
        <Container>
            <ContentWrapper>
                <TitleCometaWrapper>
                    <div>
                        <SectionTitleBig>
                            SPACE <br />
                            Media
                        </SectionTitleBig>
                    </div>
                    <div>
                        <CometaImage src={CometaImg} alt="Cometa" width={183} />
                    </div>
                </TitleCometaWrapper>
                <SpaceMediaArticle>
                    <ImgAndReadMoreLinkWrapper>
                        <ImgWrapper>
                            <StyledImgMedia src={MediaImg} alt="MediaImage" width={387} />
                        </ImgWrapper>

                        <ReadMoreLink href="">Read more</ReadMoreLink>
                    </ImgAndReadMoreLinkWrapper>

                    <SpaceMediaArticleText style={{ whiteSpace: 'pre-line' }}>
                        <span>Join Cometa Space on Blockchain Life 2024!</span>
                        <br />
                        On October 22-23<sup>th</sup>, the Space Team burst into the crypto world with our Web3 project &quot;Poomb
                        Creatures.&quot; Imagination-blowing atmosphere will be awaiting you at booth #16 in the heart of the crypto
                        universe, Dubai! Blockchain Life 2024 is the biggest event of the year in the world of cryptocurrencies and
                        blockchain technologies, and we&apos;re proud to be Sapphire sponsors of this massive event.
                        <span>What awaits you at Cometa Space&apos;s booth #16:</span>
                        <br />
                        - A presentation of our innovative project Poomb Creatures. - The unique chance to become the lucky winner and owner
                        of the FIRST-IN-THE-WORLD MINING MACHINE. - Exclusive details about our crypto asset &quot;AXIS TOKEN&quot; - the
                        newest, powerful Cometa Space token in the Poomb Creatures ecosystem. <br />- A chance to participate in our
                        interactive games and even try out the Poomb Creatures mobile app & TG clicker game right at our booth! - The
                        opportunity to win up to $3000 of Cometa Games (AXIS) Tokens or cool merch by participating in simple and
                        interesting contests. <br />- A chance to take the most creative photos with our human-tall Poomby TIGER and blow up
                        your social media with unique content!
                    </SpaceMediaArticleText>
                </SpaceMediaArticle>
            </ContentWrapper>
        </Container>
    </StyledSpaceMedia>
)

export default SpaceMedia
