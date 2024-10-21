import { featuresShowcaseArray } from '../../../../constants/featuresShowcaseArray'
import { FeatureShowcaseWrapper, FeaturesList, FeaturesWrapper, StyledFeaturesItem, StyledCometaImg } from './FeatureShowcase.styled'
import Cometa from '../../../../assets/images/MobileImg/FeaturesCometa.png'
import ItemTriangle from '../../../../assets/images/FeaturesItemTriangle.svg'

const FeatureShowcase = () => (
    <FeatureShowcaseWrapper>
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
    </FeatureShowcaseWrapper>
)

export default FeatureShowcase
