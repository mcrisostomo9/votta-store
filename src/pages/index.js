import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturedSection />
  </Layout>
)

export default IndexPage
