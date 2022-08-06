import Swiper from "swiper"
import { useEffect, useState } from "react"
import { Nullable } from "../../types"
import { SliderContainer } from "./style"
import "../../../node_modules/swiper/swiper.min.css"

interface ISliderProps {
  bannerList: { imageUrl: string }[]
}

function Slider(props: ISliderProps) {
  const { bannerList } = props

  const [sliderSwiper, setSliderSwiper] = useState<Nullable<Swiper>>(null)

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      setSliderSwiper(
        new Swiper(".slider-container", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: { el: ".swiper-pagination" },
        }),
      )
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider) => (
            <div className="swiper-slide" key={slider.imageUrl}>
              <div className="slider-nav">
                <img
                  src={slider.imageUrl}
                  width="100%"
                  height="100%"
                  alt="推荐"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="before"></div>
    </SliderContainer>
  )
}

export default Slider
