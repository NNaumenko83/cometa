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
`

export const SliderImgWrapper = styled.div`
    padding: 5px;
`

export const ImgSlider = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
`
