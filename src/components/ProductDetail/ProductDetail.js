import React from "react"
import Img from "gatsby-image"
import Container from "../Layout/Container"
import styled from "@emotion/styled"

const MainProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ImgContainer = styled.div``

const ProductInfoContainer = styled.div``

const ProductDetail = ({ product }) => {
  const {
    images,
    variants: [firstVariant],
  } = product
  return (
    <Container>
      <MainProductContainer>
        <ImgContainer>
          {images.map(image => {
            return <Img fluid={image.localFile.childImageSharp.fluid} />
          })}
        </ImgContainer>
        <ProductInfoContainer>
          <h1>{product.title}</h1>
          <p>${firstVariant.price}</p>
          <p>{product.description}</p>
          {/*<AddToCart variantId={firstVariant.shopifyId} />*/}
        </ProductInfoContainer>
      </MainProductContainer>
    </Container>
  )
}

export default ProductDetail
