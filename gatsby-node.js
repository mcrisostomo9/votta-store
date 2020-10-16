const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const product = await graphql(`
    query PagesQuery {
      allShopifyProduct(limit: 25) {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `)

  product.data.allShopifyProduct.edges.forEach(({ node: { id, handle } }) => {
    createPage({
      path: `/product/${handle}`,
      component: path.resolve("./src/templates/ProductDetailTemplate.js"),
      context: {
        id,
        handle,
      },
    })
  })

  const collections = await graphql(`
    query allShopifyCollections {
      allShopifyCollection {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `)

  collections.data.allShopifyCollection.edges.forEach(
    ({ node: { id, handle } }) => {
      createPage({
        path: `/collections/${handle}`,
        component: path.resolve("./src/templates/CollectionTemplate.js"),
        context: {
          id,
          handle,
        },
      })
    }
  )

  const legalPages = await graphql(`
    query legalPages {
      allPrismicLegalPages {
        nodes {
          id
          data {
            body {
              html
            }
            title {
              text
            }
          }
        }
      }
    }
  `)

  const { allPrismicLegalPages } = legalPages.data
  allPrismicLegalPages.nodes.forEach(({ data: { title }, id }) => {
    createPage({
      path: `/${title.text.replace(/\s+/g, "-").toLowerCase()}`,
      component: path.resolve("./src/templates/LegalPageTemplate.js"),
      context: {
        id,
      },
    })
  })
}
