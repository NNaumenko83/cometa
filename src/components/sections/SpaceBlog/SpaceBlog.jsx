import {
    StyledSpaceBlog,
    ContentWrapper,
    BlogLink,
    TitleCometaWrapper,
    RocketBigImg,
    RocketSmallImg,
    TriangleBigImg,
    TriangleSmallImg,
    CometaImage,
} from './SpaceBlog.styled'
import CometaImg from '../../../assets/images/CometaHero.png'
import RocketBigImage from '../../../assets/images/RocketBlogImg.png'
import RocketSmallImage from '../../../assets/images/RocketBlogImgSmall.png'
import TriangleBigImage from '../../../assets/images/BlogTriangleBig.png'
import TriangleSmallImage from '../../../assets/images/BlogTriangleSmall.png'
import Container from '../../Container/Container'
import SectionTitleBig from '../../SectionTitleBig/SectionTitleBig'

const SpaceBlog = () => {
    return (
        <StyledSpaceBlog id="Blog">
            <Container>
                <ContentWrapper>
                    <TitleCometaWrapper>
                        <div>
                            <CometaImage src={CometaImg} alt="Cometa" width={183} />
                        </div>
                        <div>
                            <SectionTitleBig>
                                SPACE <br />
                                BLOG
                            </SectionTitleBig>
                        </div>
                    </TitleCometaWrapper>
                    <BlogLink href="#">View posts</BlogLink>
                    <RocketBigImg src={RocketBigImage} alt="TriangleBigImage" width={200} />
                    <RocketSmallImg src={RocketSmallImage} alt="TriangleBigImage" width={120} />
                    <TriangleSmallImg src={TriangleSmallImage} alt="TriangleBigImage" width={16} />
                </ContentWrapper>
            </Container>

            <TriangleBigImg src={TriangleBigImage} alt="TriangleBigImage" width={250} />
        </StyledSpaceBlog>
    )
}

export default SpaceBlog
