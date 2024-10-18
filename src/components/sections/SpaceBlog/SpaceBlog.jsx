import SectionTitle from '../../SectionTitle/SectionTitle'
import { StyledSpaceBlog, ContentWrapper, BlogLink, TitleCometaWrapper } from './SpaceBlog.styled'
import CometaImg from '../../../assets/images/CometaHero.png'

const SpaceBlog = () => {
    return (
        <StyledSpaceBlog>
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
            </ContentWrapper>
        </StyledSpaceBlog>
    )
}

export default SpaceBlog
