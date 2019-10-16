import React, { useState } from "react"
import Container from "../Container/Container"
import styled from "@emotion/styled"
import ImgSlider from "./ImgSlider"
import DisabledButton from "../Button/DisabledButton"
import ProductProperties from "./ProductProperties"
import GridContainer from "./GridContainer"
import AddToCart from "./AddToCart"
import Guarantee from "./Guarantee"
import TextContainer from "./TextContainer"

const ProductTitle = styled.h1``

const ProductPrice = styled.div`
  font-size: 1.5rem;
`

const ProductDescription = styled.div``

const ProductDetail = ({ product }) => {
  const {
    images,
    variants: [firstVariant],
    handle,
  } = product

  const [available] = useState(firstVariant.availableForSale)

  // useEffect(() => {
  //   const checkAvailability = productHandle => {
  //     client.product.fetchByHandle(productHandle).then(product => {
  //       const res = product.variants.filter(
  //         variant => variant.id === firstVariant.shopifyId
  //       )
  //       setAvailable(res[0].available)
  //     })
  //   }
  //   checkAvailability(handle)
  // }, [client, handle, firstVariant])

  return (
    <Container>
      <GridContainer>
        <ImgSlider images={images} />
        <TextContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>${firstVariant.price}</ProductPrice>
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
      <Guarantee />
    </Container>
  )
}

export default ProductDetail
