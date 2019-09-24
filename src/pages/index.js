import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import CollectionsSection from "../components/CollectionsSection/CollectionsSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <CollectionsSection />
    <FeaturedSection />
  </Layout>
)

export default IndexPage
