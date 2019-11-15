import React from "react"
import SEO from "../components/Shared/seo"
import Layout from "../components/Layout/Layout"
import Container from "../components/Shared/Container"
import SectionTitle from "../components/Shared/SectionTitle"

const NewsletterPage = () => {
  return (
    <Layout>
      <SEO title="Premium Dress Socks" />
      <Container>
        <SectionTitle title="Sign up for our newsletter and get 15% off your next order" />
      </Container>
    </Layout>
  )
}

export default NewsletterPage
