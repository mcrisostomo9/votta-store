import React from "react"
import Img from "gatsby-image"
import Container from "../Shared/Container"
import SectionTitle from "../Shared/SectionTitle"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"

const DesignedContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);

  h4 {
    text-transform: uppercase;
  }

  p {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);

    p {
      display: initial;
    }
  }
`

const SingleDesignedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const DesignedSection = () => {
  const { cuffImage, skinfitImage, heelImage, toeImage } = useStaticQuery(
    DESIGNED_ICONS_QUERY
  )
  return (
    <Container>
      <SectionTitle title="All Votta socks are designed with..." />
      <DesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={cuffImage.childImageSharp.fixed} />
          <h4>Anti Slip Cuff</h4>
          <p>
            A combination of lycra and a thicker band to ensure that your socks
            stay up through out the day.
          </p>
        </SingleDesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={skinfitImage.childImageSharp.fixed} />
          <h4>Skin-fit technology</h4>
          <p>
            Designed and engineered to provide optimal amount of tension and
            elasticity for a tight yet comfortable fit.
          </p>
        </SingleDesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={heelImage.childImageSharp.fixed} />
          <h4>REINFORCED L SHAPED HEEL</h4>
          <p>
            Anatomic design provides natural form around the heel for maximum
            comfort.
          </p>
        </SingleDesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={toeImage.childImageSharp.fixed} />
          <h4>HAND-LINKED TOE</h4>
          <p>
            Traditional technique used by our craftsmen to provide seamless toe
          </p>
        </SingleDesignedContainer>
      </DesignedContainer>
    </Container>
  )
}

const DESIGNED_ICONS_QUERY = graphql`
  query designedIconsQuery {
    cuffImage: file(relativePath: { eq: "craft_cuff.png" }) {
      ...iconImgFragment
    }
    skinfitImage: file(relativePath: { eq: "craft_skinfit.png" }) {
      ...iconImgFragment
    }
    heelImage: file(relativePath: { eq: "craft_heel.png" }) {
      ...iconImgFragment
    }
    toeImage: file(relativePath: { eq: "craft_toe.png" }) {
      ...iconImgFragment
    }
  }
`

export default DesignedSection
