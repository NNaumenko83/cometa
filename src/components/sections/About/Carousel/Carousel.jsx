import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from '../../../../assets/images/CarouselImg.png'
import styled from '@emotion/styled'
import { SliderImgWrapper } from './Carousel.styled'

const StyledSlider = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .slick-dots li button:before {
        color: white;
    }
    .slick-dots .slick-active button:before {
        color: #ff0080;
    }
`

const StyledImageWrapper = styled(SliderImgWrapper)`
    padding: 0 10px;

    img {
        width: 100%;
        height: auto;
        border-radius: 20px;
    }
`

const images = [Image, Image, Image, Image, Image, Image]

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <StyledSlider>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <StyledImageWrapper key={index}>
                        <img src={image} alt={`slide-${index}`} width={390} />
                    </StyledImageWrapper>
                ))}
            </Slider>
        </StyledSlider>
    )
}

export default Carousel
