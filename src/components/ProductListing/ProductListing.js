import React from "react"
import styled from "@emotion/styled"
import ProductListingItem from "./ProductListingItem"
import { graphql, useStaticQuery } from "gatsby"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          images {
            localFile {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
          description
          descriptionHtml
          variants {
            sku
            id
            title
            price
          }
        }
      }
    }
  }
`

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  article {
    width: 100%;
  }
`

const ProductListing = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)
  return (
    <ProductWrapper>
      {allShopifyProduct.edges.map(({ node: product }) => {
        return <ProductListingItem product={product} key={product.id} />
      })}
    </ProductWrapper>
  )
}

export default ProductListing
