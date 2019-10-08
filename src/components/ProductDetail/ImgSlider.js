import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import "react-id-swiper/lib/styles/css/swiper.css"
import Swiper from "react-id-swiper"

const Container = styled.div`
  overflow: hidden;
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
  }
  return (
    <Container>
      <Swiper {...params}>
        {images.map((image, i) => {
          return (
            <div key={i}>
              <Img fluid={image.localFile.childImageSharp.fluid} />
            </div>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default ImgSlider
