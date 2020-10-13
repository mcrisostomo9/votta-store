import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { colors } from "../../utils/styles"

const Container = styled.div`
  overflow: hidden;

  .swiper-container {
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    background: transparent;
  }
  .swiper-pagination-bullet-active {
    background: ${colors.darkGrey};
  }
`

const ImgContainer = styled.div`
  height: 100%;
`

const ImgSlider = ({ images }) => {
  const params = {
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <MdKeyboardArrowLeft className="swiper-button-prev" />
    ),
    renderNextButton: () => (
      <MdKeyboardArrowRight className="swiper-button-next" />
    ),
  }
  return (
    <Container>
      <Swiper {...params}>
        {images.map((image, i) => {
          return (
            <ImgContainer key={i}>
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                style={{ height: "100%" }}
                imgStyle={{ objectFit: "contain" }}
              />
            </ImgContainer>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default ImgSlider
