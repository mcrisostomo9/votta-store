import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import ProductLabel from "./ProductLabel"

const ProductListingItemLink = styled(Link)`
  text-align: center;
  color: var(--main-dark);
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

const ProductTitle = styled.div`
  position: relative;
  z-index: 1;
  font-size: 1rem;
  margin-top: 0.5rem;
  color: var(--main-dark);
`

const Price = styled.div`
  font-size: 1rem;
  color: var(--main-dark);
`

const SalesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const SalesPrice = styled.span`
  color: var(--accent);
  margin-top: 0.25rem;
`

const StrikeThroughPrice = styled.span`
  text-decoration: line-through;
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
  const { price, availableForSale, compareAtPrice } = firstVariant
  const isSale = parseInt(compareAtPrice, 10) > parseInt(price, 10)
  return (
    <ProductListingItemLink to={`/product/${product.handle}`}>
      <Preview>
        {!availableForSale && (
          <ProductLabel color="var(--red)">Out of stock</ProductLabel>
        )}
        {availableForSale && isSale && (
          <ProductLabel color="var(--accent)">Sale</ProductLabel>
        )}
        <Image fluid={fluid} />
        <ProductTitle>{product.title}</ProductTitle>
        {isSale ? (
          <SalesContainer>
            <StrikeThroughPrice>${compareAtPrice}</StrikeThroughPrice>
            <SalesPrice>${price}</SalesPrice>
          </SalesContainer>
        ) : (
          <Price>${price}</Price>
        )}
      </Preview>
    </ProductListingItemLink>
  )
}

export default ProductListingItem
