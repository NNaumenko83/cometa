/* eslint-disable react/prop-types */
import MainTitleAboutPage from '../MainTitleAboutPage/MainTitleAboutPage'
import { Infotext, InfoWrapper, TitleTextWrapper, ImgWrapper, Img, InfoContainer } from './Info.styled'

const Info = ({ title, imgUrl, text, imgPosition, imageWidthDesktop }) => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <ImgWrapper $imgPosition={imgPosition}>
                    <Img src={imgUrl} alt="Photo on work" width={imageWidthDesktop} />
                </ImgWrapper>
                <TitleTextWrapper>
                    <div>
                        <MainTitleAboutPage>{title}</MainTitleAboutPage>
                    </div>
                    <div>
                        {Object.keys(text).map((key, index) => (
                            <Infotext key={index} dangerouslySetInnerHTML={{ __html: text[key] }} />
                        ))}
                    </div>
                </TitleTextWrapper>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
