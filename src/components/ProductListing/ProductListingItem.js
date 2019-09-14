import React from "react"
import Image from "gatsby-image"

const ProductListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <article className="column is-one-quarter content">
      <Image
        fluid={firstImage.localFile.childImageSharp.fluid}
        loading="lazy"
      />
      <h3 className="title is-3">{product.title}</h3>
      <p className="subtitle is-4">${firstVariant.price}</p>
    </article>
  )
}

export default ProductListingItem
