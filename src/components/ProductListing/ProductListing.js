import React from "react"
import styled from "@emotion/styled"
import ProductListingItem from "./ProductListingItem"
import { breakpoints } from "../../utils/styles"

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const ProductListing = ({ products }) => (
  <ProductWrapper>
    {products.map(product => (
      <ProductListingItem product={product} key={product.id} />
    ))}
  </ProductWrapper>
)

export default ProductListing
