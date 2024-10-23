/* eslint-disable react/prop-types */
import MainTitleAboutPage from '../MainTitleAboutPage/MainTitleAboutPage'
import { Infotext, InfoWrapper, TitleTextWrapper, ImgWrapper, Img, InfoContainer, TextWrapper } from './Info.styled'

const Info = ({ title, imgUrl, text, imgPosition, imageWidthDesktop }) => {
    return (
        <InfoContainer>
            <InfoWrapper>
                {imgUrl && (
                    <ImgWrapper $imgPosition={imgPosition}>
                        <Img src={imgUrl} alt="Photo on work" width={imageWidthDesktop} />
                    </ImgWrapper>
                )}
                <TitleTextWrapper>
                    <MainTitleAboutPage>{title}</MainTitleAboutPage>

                    <TextWrapper>
                        {Object.keys(text).map((key, index) => (
                            <Infotext key={index} dangerouslySetInnerHTML={{ __html: text[key] }} />
                        ))}
                    </TextWrapper>
                </TitleTextWrapper>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
