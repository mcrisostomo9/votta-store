import React from "react"
import styled from "@emotion/styled"
import ProductListingItem from "./ProductListingItem"

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  article {
    width: 100%;
  }
`

const ProductListing = ({ products }) => {
  return (
    <ProductWrapper>
      {products.map(product => {
        return <ProductListingItem product={product} key={product.id} />
      })}
    </ProductWrapper>
  )
}

export default ProductListing
