import Container from '../../Container/Container'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Carousel from './Carousel/Carousel'
import { StyledWorkSpace, WorkSpaceContent, StyledCometaImg, StyledTriangleImg } from './WorkSpace.styled'
import Triangle from '../../../assets/images/WorkSpaceTriangle.png'
import CometaImage from '../../../assets/images/CometaHero.png'

const WorkSpace = () => (
    <StyledWorkSpace id="Team">
        <Container>
            <WorkSpaceContent>
                <SectionTitle>Work space</SectionTitle>
                <Carousel />
            </WorkSpaceContent>
            <StyledTriangleImg src={Triangle} alt="Triangle" width={220} />
            <StyledCometaImg src={CometaImage} alt="CometaImage" width={387} />
        </Container>
    </StyledWorkSpace>
)

export default WorkSpace
