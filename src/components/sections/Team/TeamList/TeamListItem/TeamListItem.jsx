/* eslint-disable react/prop-types */
import { MemberCard, MemberDescription, MemberImage, MemberPosition, ImageWrapper } from './TeamListItem.styled'

const TeamMember = ({ name, position, description, imageUrl }) => {
    return (
        <MemberCard>
            <ImageWrapper>
                <MemberImage src={imageUrl} alt={name} />
            </ImageWrapper>

            <MemberPosition>
                {position} {name}
            </MemberPosition>
            <MemberDescription>{description}</MemberDescription>
        </MemberCard>
    )
}

export default TeamMember
