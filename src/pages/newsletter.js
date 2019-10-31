import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Container from "../components/Container/Container"
import SectionTitle from "../components/SectionTitle/SectionTitle"

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
