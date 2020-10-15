import React from "react"
import SEO from "../components/Shared/seo"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import CollectionsSection from "../components/CollectionsSection/CollectionsSection"
import { graphql, useStaticQuery } from "gatsby"
// import NewsletterSection from "../components/NewsletterSection/NewsletterSection"
import DesignedSection from "../components/DesignedSection/DesignedSection"

const IndexPage = () => {
  const { prismicHomepage, heroImg } = useStaticQuery(HOMEPAGE_QUERY)
  return (
    <Layout>
      <SEO title="Premium Dress Socks" />
      <HeroSection
        title={prismicHomepage.data.hero_title.text}
        subheader={prismicHomepage.data.subheader.text}
        hero={heroImg.childImageSharp.fluid}
      />
      <CollectionsSection />
      <FeaturedSection />
      <DesignedSection />
    </Layout>
  )
}

export default IndexPage

const HOMEPAGE_QUERY = graphql`
  query {
    prismicHomepage: prismicHomepage {
      data {
        hero_title {
          text
        }
        subheader {
          text
        }
      }
    }
    heroImg: file(relativePath: { eq: "wall-socks-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 720, traceSVG: { background: "#fff" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
