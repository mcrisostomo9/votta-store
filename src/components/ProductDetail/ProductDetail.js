import React, { useState } from "react"
import Container from "../Shared/Container"
import styled from "@emotion/styled"
import ImgSlider from "./ImgSlider"
import DisabledButton from "../Button/DisabledButton"
import ProductProperties from "./ProductProperties"
import GridContainer from "./GridContainer"
import AddToCart from "./AddToCart"
import TextContainer from "./TextContainer"
import { colors } from "../../utils/styles"

const ProductTitle = styled.h1``

const ProductPrice = styled.div`
  font-size: 1.5rem;
`

const ProductDescription = styled.div``

const SalesContainer = styled.div`
  display: flex;
  //justify-content: space-around;
`

const SalesPrice = styled.span`
  color: ${colors.teal};
  font-size: 1.5rem;
`

const StrikeThroughPrice = styled.span`
  text-decoration: line-through;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`

const ProductDetail = ({ product }) => {
  const {
    images,
    variants: [firstVariant],
    handle,
  } = product

  const { price, compareAtPrice, availableForSale } = firstVariant
  const isSale = parseInt(compareAtPrice, 10) > parseInt(price, 10)
  const [available] = useState(availableForSale)

  return (
    <Container>
      <GridContainer>
        <ImgSlider images={images} />
        <TextContainer>
          <ProductTitle>{product.title}</ProductTitle>
          {isSale ? (
            <SalesContainer>
              <SalesPrice>${price}</SalesPrice>
              <StrikeThroughPrice>${compareAtPrice}</StrikeThroughPrice>
            </SalesContainer>
          ) : (
            <ProductPrice>${price}</ProductPrice>
          )}
          <ProductDescription
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
          {available ? (
            <AddToCart firstVariant={firstVariant} handle={handle} />
          ) : (
            <DisabledButton>Sorry, this product is sold out</DisabledButton>
          )}
        </TextContainer>
      </GridContainer>
      <ProductProperties />
      {/*<Guarantee />*/}
    </Container>
  )
}

export default ProductDetail
