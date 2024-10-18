import { featuresShowcaseArray } from '../../../../constants/featuresShowcaseArray'
import { FeatureShowcaseWrapper, FeaturesList, FeaturesWrapper } from './FeatureShowcase.styled'
import Cometa from '../../../../assets/images/MobileImg/FeaturesCometa.png'

const FeatureShowcase = () => (
    <FeatureShowcaseWrapper>
        <div>
            <img src={Cometa} alt="Cometa" width={138} />
        </div>
        <FeaturesWrapper>
            <FeaturesList>
                {featuresShowcaseArray.map(feature => (
                    <li key={feature}>
                        <p>{feature}</p>
                    </li>
                ))}
            </FeaturesList>
        </FeaturesWrapper>
    </FeatureShowcaseWrapper>
)

export default FeatureShowcase
