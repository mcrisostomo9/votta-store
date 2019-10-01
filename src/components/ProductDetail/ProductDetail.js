import React, { useContext } from "react"

import Container from "../Layout/Container"
import styled from "@emotion/styled"
import Button from "../Button/Button"
import { StoreContext } from "../../context/StoreContext"
import ImgSlider from "./ImgSlider"
import { breakpoints } from "../../utils/styles"

const MainProductContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

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
        <ImgSlider images={images} />
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
