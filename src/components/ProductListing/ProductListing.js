import React from "react"
import styled from "@emotion/styled"
import ProductListingItem from "./ProductListingItem"

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const ProductListing = ({ products }) => (
  <ProductWrapper>
    {products.map(product => {
      return <ProductListingItem product={product} key={product.id} />
    })}
  </ProductWrapper>
)

export default ProductListing
