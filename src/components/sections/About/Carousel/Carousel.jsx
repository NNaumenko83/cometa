import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselWrapper, ImgSlider, SliderImgWrapper } from './Carousel.styled'
import Immage from '../../../../assets/images/CarouselImg.png'

function Carousel() {
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,

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
        <CarouselWrapper>
            <div className="slider-container">
                <Slider {...settings} style={{ display: 'flex', gap: '10px' }}>
                    <SliderImgWrapper>
                        <ImgSlider src={Immage} alt="" width={390} />
                    </SliderImgWrapper>
                    <SliderImgWrapper>
                        <ImgSlider src={Immage} alt="" width={390} />
                    </SliderImgWrapper>
                    <SliderImgWrapper>
                        <ImgSlider src={Immage} alt="" width={390} />
                    </SliderImgWrapper>
                    <SliderImgWrapper>
                        <ImgSlider src={Immage} alt="" width={390} />
                    </SliderImgWrapper>
                    <SliderImgWrapper>
                        <ImgSlider src={Immage} alt="" width={390} />
                    </SliderImgWrapper>
                    <SliderImgWrapper>
                        <ImgSlider src={Immage} alt="" width={390} />
                    </SliderImgWrapper>
                </Slider>
            </div>
        </CarouselWrapper>
    )
}

export default Carousel
