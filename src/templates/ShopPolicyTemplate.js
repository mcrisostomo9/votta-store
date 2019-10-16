import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Container from "../components/Container/Container"
import styled from "@emotion/styled"

const CollectionTitle = styled.h2`
  text-align: center;
`
// TODO extract title h2 to page title

const PolicyContent = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

const CollectionTemplate = ({ data }) => {
  const {
    shopifyShopPolicy: { title, body },
  } = data
  return (
    <Layout>
      <Container>
        <CollectionTitle>{title}</CollectionTitle>
        <PolicyContent dangerouslySetInnerHTML={{ __html: `${body}` }} />
      </Container>
    </Layout>
  )
}

export default CollectionTemplate

export const query = graphql`
  query($type: String!) {
    shopifyShopPolicy(type: { eq: $type }) {
      title
      body
    }
  }
`
