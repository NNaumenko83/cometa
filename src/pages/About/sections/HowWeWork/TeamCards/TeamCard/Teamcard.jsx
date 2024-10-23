/* eslint-disable react/prop-types */
import { Card, CardTitle, CardText, ImgWrapper, TitleTextWrapper, Img } from './TeamCard.styled'

export const TeamCard = ({ title, description, imageUrl, icon }) => {
    return (
        <Card>
            <ImgWrapper>
                <Img src={imageUrl} alt={title} />
            </ImgWrapper>

            <TitleTextWrapper>
                <CardTitle>
                    {title} {icon}
                </CardTitle>
                <CardText>{description}</CardText>
            </TitleTextWrapper>
        </Card>
    )
}
