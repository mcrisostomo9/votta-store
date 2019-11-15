import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Container from "../components/Shared/Container"
import styled from "@emotion/styled"

const CollectionTitle = styled.h2`
  text-align: center;
  margin-top: 1rem;
`
// TODO extract title h2 to page title

const PolicyContent = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 2rem auto 0;
`

const LegalPageTemplate = ({ data }) => {
  const { title, body } = data.prismicLegalPages.data
  return (
    <Layout>
      <Container>
        <CollectionTitle>{title.text}</CollectionTitle>
        <PolicyContent dangerouslySetInnerHTML={{ __html: body.html }} />
      </Container>
    </Layout>
  )
}

export default LegalPageTemplate

export const query = graphql`
  query($id: String!) {
    prismicLegalPages(id: { eq: $id }) {
      data {
        title {
          text
        }
        body {
          html
        }
      }
    }
  }
`
