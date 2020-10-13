import React from "react"
import SEO from "../components/Shared/seo"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import CollectionsSection from "../components/CollectionsSection/CollectionsSection"
import { graphql, useStaticQuery } from "gatsby"
import NewsletterSection from "../components/NewsletterSection/NewsletterSection"
import DesignedSection from "../components/DesignedSection/DesignedSection"

const IndexPage = () => {
  const {
    prismicHomepage: { data },
  } = useStaticQuery(HOMEPAGE_QUERY)
  console.log(data)
  return (
    <Layout>
      <SEO title="Premium Dress Socks" />
      <HeroSection
        title={data.hero_title.text}
        subheader={data.subheader.text}
        hero={data.hero_image.fluid}
      />
      <CollectionsSection />
      <FeaturedSection />
      {/*<DesignedSection />*/}
    </Layout>
  )
}

export default IndexPage

const HOMEPAGE_QUERY = graphql`
  query {
    prismicHomepage {
      data {
        hero_title {
          text
        }
        subheader {
          text
        }
        hero_image {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyPrismicImageFluid
          }
        }
      }
    }
  }
`
