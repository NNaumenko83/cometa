import { Wrapper, Title, TitlePink, Text } from './AboutContent.styled'

const AboutContent = () => {
    return (
        <Wrapper>
            <div>
                {' '}
                <Title>
                    Welcome to
                    <TitlePink>
                        {' '}
                        COMET <br />
                        SPACE
                    </TitlePink>
                </Title>
                <Text>
                    The Next Frontier of NFT, Crypto and Web3! With Comet Space, dive into a universe where every moment
                    brings new adventures and opportunities, making gaming not just fun but also rewarding.
                </Text>
            </div>

            <div>
                {' '}
                <Title>
                    <TitlePink>OUR MISSION</TitlePink>
                </Title>
                <Text>
                    is to lead the way in innovative gaming and provide our users with the opportunity to earn virtual
                    assets in the real world.
                </Text>
            </div>
        </Wrapper>
    )
}

export default AboutContent
