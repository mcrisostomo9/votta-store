import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { breakpoints, colors } from "../../utils/styles"

const ProductListingItemLink = styled(Link)`
  text-align: center;
  color: ${colors.darkGrey};

  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  text-decoration: none;
  transition: all 300ms;

  @media (hover: hover) {
    :hover {
      background: red;
    }
  }
`

const Preview = styled(`div`)`
  border-bottom: 1px solid ${colors.darkGrey};
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
