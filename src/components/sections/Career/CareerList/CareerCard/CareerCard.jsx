/* eslint-disable react/prop-types */
import {
    StyledCard,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    CardActions,
    CardButton,
    ImageWrapper,
    ReadMoreLink,
} from './CareerCard.styled'

const CareerCard = ({ name, role, description, imageUrl }) => {
    return (
        <StyledCard>
            <ImageWrapper>
                <CardImage src={imageUrl} alt={name} />
                <CardTitle>{role}</CardTitle>
            </ImageWrapper>

            <CardContent>
                <CardDescription>{description}</CardDescription>
                <CardActions>
                    <ReadMoreLink href="#">Read more</ReadMoreLink>
                    <CardButton>send CV</CardButton>
                </CardActions>
            </CardContent>
        </StyledCard>
    )
}

export default CareerCard
