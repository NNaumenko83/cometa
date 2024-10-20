import Container from '../../Container/Container'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Carousel from './Carousel/Carousel'
import { StyledWorkSpace, WorkSpaceContent } from './WorkSpace.styled'

const WorkSpace = () => (
    <StyledWorkSpace>
        <Container>
            <WorkSpaceContent>
                <SectionTitle>Work space</SectionTitle>
                <Carousel />
            </WorkSpaceContent>
        </Container>
    </StyledWorkSpace>
)

export default WorkSpace
