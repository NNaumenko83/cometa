import { Wrapper, Title, TitlePink, Text, TitleBreak, FirstPartAboutContent, SecondPartAboutContent } from './AboutContent.styled'

const AboutContent = () => {
    return (
        <Wrapper>
            <FirstPartAboutContent>
                {' '}
                <Title>
                    Welcome to
                    <TitlePink>
                        {' '}
                        COMETA <TitleBreak />
                        SPACE
                    </TitlePink>
                </Title>
                <Text>
                    The Next Frontier of NFT, Crypto and Web3! With Cometa Space, dive into a universe where every moment brings new
                    adventures and opportunities, making gaming not just fun but also rewarding.
                </Text>
            </FirstPartAboutContent>

            <SecondPartAboutContent>
                {' '}
                <Title>
                    <TitlePink>OUR MISSION</TitlePink>
                </Title>
                <Text>
                    is to lead the way in innovative gaming and provide our users with the opportunity to earn virtual assets in the real
                    world.
                </Text>
            </SecondPartAboutContent>
        </Wrapper>
    )
}

export default AboutContent
