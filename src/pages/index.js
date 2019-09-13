import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <div style={{ height: "2000px" }}>hello</div>
      <FeaturedSection />
    </Layout>
  )
}

export default IndexPage
