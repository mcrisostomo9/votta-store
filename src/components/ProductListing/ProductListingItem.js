import React from "react"
import Img from "gatsby-image"

const ProductListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <article className="column is-one-quarter content">
      <Img fluid={firstImage.localFile.childImageSharp.fluid} />
      <h3 className="title is-3">{product.title}</h3>
      <p className="subtitle is-4">${firstVariant.price}</p>
    </article>
  )
}

export default ProductListingItem
