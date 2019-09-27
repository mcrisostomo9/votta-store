import React, { useContext } from "react"
import Img from "gatsby-image"
import Container from "../Layout/Container"
import styled from "@emotion/styled"
import Button from "../Button/Button"
import { StoreContext } from "../../context/StoreContext"

const MainProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ImgContainer = styled.div``

const ProductInfoContainer = styled.div``

const ProductDetail = ({ product }) => {
  const { addProductToCart, isLoading } = useContext(StoreContext)
  const {
    images,
    variants: [firstVariant],
  } = product
  return (
    <Container>
      <MainProductContainer>
        <ImgContainer>
          {images.map((image, index) => {
            return (
              <Img fluid={image.localFile.childImageSharp.fluid} key={index} />
            )
          })}
        </ImgContainer>
        <ProductInfoContainer>
          <h1>{product.title}</h1>
          <p>${firstVariant.price}</p>
          <p>{product.description}</p>
          <Button onClick={() => addProductToCart(firstVariant.shopifyId)}>
            {isLoading ? "Adding to cart..." : "add to cart"}
          </Button>
        </ProductInfoContainer>
      </MainProductContainer>
    </Container>
  )
}

export default ProductDetail
