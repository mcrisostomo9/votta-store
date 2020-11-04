require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Votta Socks`,
    description: `Votta Socks are designed for comfort and versatility. Each pair of premium dress socks are made using quality materials. We offer men's and women's dress socks in a wide range of patterned, striped, ribbed, and colorful solid designs fit for any occasion.`,
    author: `@mcrisostomo9`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        verbose: true,
        paginationSize: 30,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `votta-socks`,
        accessToken: `${process.env.GATSBY_PRISMIC_ACCESS_TOKEN}`,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          legal_pages: require("./src/schemas/legal_pages.json"),
        },
        // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // `Work Sans:400,700`,
          // `Space Mono:400,700`,
          "Raleway:600",
          "Merriweather:300",
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-eslint",
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        resolvers: {
          ShopifyProduct: {
            title: node => node.title,
            tags: node => node.tags,
            handle: node => node.handle,
            price: node => node.priceRange.maxVariantPrice.amount,
            image: node => node.images[0],
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
  ],
}
