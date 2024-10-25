import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselWrapper, ImgSlider, SliderImgWrapper } from './Carousel.styled'
import { workspacePhotoes } from '../../../../constants/workSpacePhoto'

function Carousel() {
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    }

    return (
        <CarouselWrapper>
            <Slider {...settings}>
                {workspacePhotoes.map((item, index) => (
                    <SliderImgWrapper key={index}>
                        <ImgSlider src={item} alt="" />
                    </SliderImgWrapper>
                ))}
            </Slider>
        </CarouselWrapper>
    )
}

export default Carousel
