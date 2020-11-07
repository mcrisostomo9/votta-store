import React, { useState } from "react"
import Container from "../Shared/Container"
import styled from "@emotion/styled"
import ImgSlider from "./ImgSlider"
import DisabledButton from "../Button/DisabledButton"
import ProductProperties from "./ProductProperties"
import GridContainer from "./GridContainer"
import AddToCart from "./AddToCart"
import TextContainer from "./TextContainer"
import { breakpoints } from "../../utils/styles"

const ProductTitle = styled.h1`
  font-size: var(--h4);
  margin-top: 2rem;

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 0;
  }
`

const ProductPrice = styled.p`
  font-size: var(--h5);
`

const ProductDescription = styled.div`
  ul {
    margin: 0.5rem 0 0;
  }
`

const SalesContainer = styled.div`
  display: flex;
`

const SalesPrice = styled.span`
  color: var(--accent);
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
    <>
      <div style={{ background: "var(--background)" }}>
        <Container>
          <GridContainer style={{ padding: "3rem 0" }}>
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
        </Container>
      </div>
      <Container>
        <ProductProperties />
      </Container>
    </>
  )
}

export default ProductDetail
