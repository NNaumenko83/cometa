import SectionTitle from '../../SectionTitle/SectionTitle'
import { StyledSpaceBlog, ContentWrapper } from './SpaceBlog.styled'

const SpaceBlog = () => {
    return (
        <StyledSpaceBlog>
            <ContentWrapper>
                <div>
                    <div>
                        <img src="" alt="Cometa" />
                    </div>
                    <div>
                        <SectionTitle>
                            SPACE <br />
                            BLOG
                        </SectionTitle>
                    </div>
                </div>
            </ContentWrapper>
        </StyledSpaceBlog>
    )
}

export default SpaceBlog
