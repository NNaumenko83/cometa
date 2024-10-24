import { careerData } from '../../../../constants/careerData'
import CareerCard from './CareerCard/CareerCard'
import { StyledCareerList } from './CareerList.styled'

const CareerList = () => (
    <StyledCareerList>
        {careerData.map((item, index) => (
            <CareerCard
                key={index}
                name={item.name}
                role={item.role}
                description={item.description}
                imageUrl={item.imageUrl}
                to={item.readMoreLink}
            />
        ))}
    </StyledCareerList>
)

export default CareerList
