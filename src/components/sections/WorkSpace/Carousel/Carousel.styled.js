import styled from '@emotion/styled'

export const CarouselWrapper = styled.div`
    width: 100%;
    max-width: 1200px;

    .slick-dots {
        bottom: -30px;
    }

    .slick-dots li button:before {
        color: rgb(255, 255, 255);
        font-size: 8px;
    }

    .slick-dots li.slick-active button:before {
        content: '';
        width: 18px;
        height: 18px;
        display: block;
        border-radius: 50%;
        background-color: rgb(255, 0, 217);
        margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
        .slick-slide {
            transform: scale(0.8);
            transition: transform 0.5s ease;
        }

        .slick-center {
            transform: scale(1.08);
            z-index: 1;
        }
    }
`

export const SliderImgWrapper = styled.div`
    padding-inline: 10px;
    box-sizing: border-box;
    width: 100%;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 20px;
    }

    @media screen and (min-width: 768px) {
        padding: 10px 0;
    }
`

export const ImgSlider = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
`
