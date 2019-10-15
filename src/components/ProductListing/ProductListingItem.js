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

const ProductTitle = styled.h4`
  position: relative;
  z-index: 1;
`

const SoldOutLabel = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background: ${colors.darkGrey};
  color: #fff;
  font-weight: bold;
  padding: 0.5rem;
  font-size: 0.75rem;
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
  const { price, availableForSale } = firstVariant
  return (
    <ProductListingItemLink to={`/product/${product.handle}`}>
      <Preview>
        {!availableForSale && <SoldOutLabel>Out of stock</SoldOutLabel>}
        <Image fluid={fluid} />
        <ProductTitle>{product.title}</ProductTitle>
        <p>${price}</p>
      </Preview>
    </ProductListingItemLink>
  )
}

export default ProductListingItem
