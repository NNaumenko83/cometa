import SectionTitle from '../../SectionTitle/SectionTitle'

import {
    StyledSpaceBlog,
    ContentWrapper,
    BlogLink,
    TitleCometaWrapper,
    RocketBigImg,
    RocketSmallImg,
    TriangleBigImg,
    TriangleSmallImg,
} from './SpaceBlog.styled'
import CometaImg from '../../../assets/images/CometaHero.png'
import RocketBigImage from '../../../assets/images/RocketBlogImg.png'
import RocketSmallImage from '../../../assets/images/RocketBlogImgSmall.png'
import TriangleBigImage from '../../../assets/images/BlogTriangleBig.png'
import TriangleSmallImage from '../../../assets/images/BlogTriangleSmall.png'
import Container from '../../Container/Container'

const SpaceBlog = () => {
    return (
        <StyledSpaceBlog>
            <Container>
                <ContentWrapper>
                    <TitleCometaWrapper>
                        <div>
                            <img src={CometaImg} alt="Cometa" width={100} />
                        </div>
                        <div>
                            <SectionTitle>
                                SPACE <br />
                                BLOG
                            </SectionTitle>
                        </div>
                    </TitleCometaWrapper>
                    <BlogLink href="#">View posts</BlogLink>
                    <RocketBigImg src={RocketBigImage} alt="TriangleBigImage" width={200} />
                    <RocketSmallImg src={RocketSmallImage} alt="TriangleBigImage" width={120} />
                    <TriangleSmallImg src={TriangleSmallImage} alt="TriangleBigImage" width={16} />
                </ContentWrapper>
            </Container>

            <TriangleBigImg src={TriangleBigImage} alt="TriangleBigImage" width={100} />
        </StyledSpaceBlog>
    )
}

export default SpaceBlog
