import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { colors } from "../../utils/styles"

const ProductListingItemLink = styled(Link)`
  text-align: center;
  color: ${colors.darkGrey};
  overflow: hidden;
  text-decoration: none;
`

const Preview = styled.div`
  overflow: hidden;
  position: relative;
  .gatsby-image-wrapper {
    transition: all 300ms;
  }
  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      .gatsby-image-wrapper {
        transform: scale(1.1);
      }
    }
  }
`

const ProductListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  const {
    localFile: {
      childImageSharp: { fluid },
    },
  } = firstImage
  return (
    <ProductListingItemLink to={`/product/${product.handle}`}>
      <Preview>
        <Image fluid={fluid} loading="lazy" />
        <h4>{product.title}</h4>
        <p>${firstVariant.price}</p>
      </Preview>
    </ProductListingItemLink>
  )
}

export default ProductListingItem
