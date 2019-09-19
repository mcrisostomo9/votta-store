import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { breakpoints } from "../../utils/styles"

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    width: 33%;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 25%;
  }
`

const ProductListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <ProductContainer>
      <Link to={`/product/${product.handle}`}>
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <h3>{product.title}</h3>
        <p>${firstVariant.price}</p>
      </Link>
    </ProductContainer>
  )
}

export default ProductListingItem
