/* eslint-disable react/prop-types */
import {
    StyledCard,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    CardActions,
    CardLinkSendCV,
    ImageWrapper,
    ReadMoreLink,
} from './CareerCard.styled'

const CareerCard = ({ name, role, description, imageUrl, to }) => {
    return (
        <StyledCard>
            <ImageWrapper>
                <CardImage src={imageUrl} alt={name} />
                <CardTitle>{role}</CardTitle>
            </ImageWrapper>

            <CardContent>
                <CardDescription>{description}</CardDescription>
                <CardActions>
                    <ReadMoreLink to={to}>Read more</ReadMoreLink>
                    <CardLinkSendCV href="https://t.me/hr_lissa" target="_blank" rel="noopener noreferrer nofollow">
                        send CV
                    </CardLinkSendCV>
                </CardActions>
            </CardContent>
        </StyledCard>
    )
}

export default CareerCard
