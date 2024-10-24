import Container from '../../../../components/Container/Container'
import { VisionOneTextPhoto } from '../../../../constants/AbotPageConstants/VisionOneTextPhoto'
import { VisionTwoTextPhoto } from '../../../../constants/AbotPageConstants/VisionTwoTextPhoto'
import Info from '../../components/Info/Info'
import {
    StyledFutureVision,
    MobileFutureTwoWrapper,
    DesktopFutureTwoWrapper,
    ContentWrapper,
    InfoWrapper,
    StyledTriangleImg,
} from './FutureVision.styled'
import TriangleImg from '../../../../assets/images/AboutPage/TriangleRight.png'

const FutureVision = () => {
    return (
        <StyledFutureVision>
            <ContentWrapper>
                <Info
                    imgUrl={VisionOneTextPhoto.imgUrl}
                    title={VisionOneTextPhoto.title}
                    text={VisionOneTextPhoto.text}
                    imgPosition={VisionOneTextPhoto.imgPosition}
                    imageWidthDesktop={VisionOneTextPhoto.imageWidthDesktop}
                />
                <MobileFutureTwoWrapper>
                    <Info
                        imgUrl={VisionTwoTextPhoto.imgUrl}
                        title={VisionTwoTextPhoto.title}
                        text={VisionTwoTextPhoto.text}
                        imgPosition={VisionTwoTextPhoto.imgPosition}
                        imageWidthDesktop={VisionTwoTextPhoto.imageWidthDesktop}
                    />
                </MobileFutureTwoWrapper>
                <DesktopFutureTwoWrapper>
                    <Container>
                        <InfoWrapper>
                            <Info
                                title={VisionTwoTextPhoto.title}
                                text={VisionTwoTextPhoto.text}
                                imgPosition={VisionTwoTextPhoto.imgPosition}
                                imageWidthDesktop={VisionTwoTextPhoto.imageWidthDesktop}
                            />
                        </InfoWrapper>
                    </Container>
                    <StyledTriangleImg src={TriangleImg} alt="Triangle" width={69} />
                </DesktopFutureTwoWrapper>
            </ContentWrapper>
        </StyledFutureVision>
    )
}

export default FutureVision
