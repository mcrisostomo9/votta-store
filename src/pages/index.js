import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection/HeroSection"
import ProductListing from "../components/ProductListing/ProductListing"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <ProductListing />
    </Layout>
  )
}

export default IndexPage
