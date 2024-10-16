import SectionTitle from '../../SectionTitle/SectionTitle'
import { StyledSpaceMedia, ContentWrapper, TitleCometaWrapper, SpaceMediaArticle } from './SpaceMedia.styled'
import CometaImg from '../../../assets/images/CometaHero.png'
import MediaImg from '../../../assets/images/SpaceMediaImg.png'

const SpaceMedia = () => {
    return (
        <StyledSpaceMedia>
            <ContentWrapper>
                <TitleCometaWrapper>
                    <div>
                        <SectionTitle>
                            SPACE <br />
                            Media
                        </SectionTitle>
                    </div>
                    <div>
                        <img src={CometaImg} alt="Cometa" width={80} />
                    </div>
                </TitleCometaWrapper>
                <SpaceMediaArticle>
                    <div>
                        <img src={MediaImg} alt="" width={387} />
                    </div>
                    <div>
                        <a href=""></a>
                    </div>
                    <div>
                        <p>
                            <span>Join Comet Space on Blockchain Life 2024!</span>
                            On October 22-23<sup>th</sup>, the Space Team burst into the crypto world with our Web3
                            project &quot;Poomb Creatures&quot;. Imagination-blowing atmosphere will be awaiting you at
                            booth #16 in the heart of the crypto universe, Dubai! Blockchain Life 2024 is the biggest
                            event of the year in the world of cryptocurrencies and blockchain technologies, and
                            we&apos;re proud to be Sapphire sponsors of this massive event.
                            <span>What awaits you at Comet Space&apos;s booth #16:</span>- A presentation of our
                            innovative project Poomb Creatures - The unique chance to become the lucky winner and owner
                            of the FIRST-IN-THE-WORLD MINING MACHINE - Exclusive details about our crypto asset
                            &quot;COGA TOKEN&quot; - the newest, powerful Comet Space token in the Poomb Creatures
                            ecosystem - A chance to participate in our interactive games and even try out the Poomb
                            Creatures mobile app & TG clicker game right at our booth! - The opportunity to win up to
                            $3000 of Comet Games (COGA) Tokens or cool merch by participating in simple and interesting
                            contests - A chance to take the most creative photos with our human-tall Poomby TIGER and
                            blow up your social media with unique content!
                        </p>
                    </div>
                </SpaceMediaArticle>
            </ContentWrapper>
        </StyledSpaceMedia>
    )
}

export default SpaceMedia
