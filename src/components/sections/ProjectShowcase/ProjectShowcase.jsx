import { featuresShowcaseArray } from '../../../constants/featuresShowcaseArray'
import { StyledProjectShowcase, FeaturesList, FeaturesWrapper, StyledFeaturesItem, StyledCometaImg } from './ProjectShowcase.styled'
import Cometa from '../../../assets/images/MobileImg/FeaturesCometa.png'
import ItemTriangle from '../../../assets/images/FeaturesItemTriangle.svg'

const ProjectShowcase = () => (
    <StyledProjectShowcase id="Project">
        <div>
            <StyledCometaImg src={Cometa} alt="Cometa" width={180} />
        </div>
        <FeaturesWrapper>
            <FeaturesList>
                {featuresShowcaseArray.map(feature => (
                    <StyledFeaturesItem key={feature}>
                        <img src={ItemTriangle} alt="Triangle" /> <p>{feature}</p>
                    </StyledFeaturesItem>
                ))}
            </FeaturesList>
        </FeaturesWrapper>
    </StyledProjectShowcase>
)

export default ProjectShowcase
