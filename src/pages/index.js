import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection/HeroSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import CollectionsSection from "../components/CollectionsSection/CollectionsSection"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const {
    prismicHomepage: { data },
  } = useStaticQuery(HOMEPAGE_QUERY)
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection
        title={data.hero_title.text}
        subheader={data.subheader.text}
        hero={data.hero_image.localFile.childImageSharp.fluid}
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
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
