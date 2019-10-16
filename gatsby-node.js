const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const product = await graphql(`
    query PagesQuery {
      allShopifyProduct {
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

  const shopPolicy = await graphql(`
    query allShopifyShopPolicy {
      allShopifyShopPolicy {
        edges {
          node {
            title
            type
          }
        }
      }
    }
  `)

  shopPolicy.data.allShopifyShopPolicy.edges.forEach(
    ({ node: { title, type } }) => {
      createPage({
        path: `/${title.replace(/\s+/g, "-").toLowerCase()}`,
        component: path.resolve("./src/templates/ShopPolicyTemplate.js"),
        context: {
          title,
          type,
        },
      })
    }
  )
}
