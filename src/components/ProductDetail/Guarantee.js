import React from "react"
import GridContainer from "./GridContainer"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const TextContainer = styled.div`
  max-width: 500px;
  justify-self: center;
  align-self: center;
`

const Guarantee = () => {
  const {
    guaranteeLogo: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(IMAGE_QUERY)
  return (
    <GridContainer>
      <Img
        fixed={fixed}
        style={{
          justifySelf: "center",
        }}
      />
      <TextContainer>
        <h4>VOTTA SOCKS GUARANTEE</h4>
        <p>
          If you are not 100% satisfied with your purchase, it may be returned
          within 30 days for a full refund. We offer free US returns for all
          orders.
        </p>
      </TextContainer>
    </GridContainer>
  )
}

export default Guarantee

const IMAGE_QUERY = graphql`
  query guarnteeLogo {
    guaranteeLogo: file(relativePath: { eq: "guarantee-logo.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 300) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`
