import React from "react"
import Img from "gatsby-image"
import Container from "../Shared/Container"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"

const DesignedContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 5rem;

  span {
    margin-top: 0.5rem;
    text-transform: uppercase;
  }

  p {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
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
      {/*<SectionTitle title="All Votta socks are designed with..." />*/}
      <DesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={cuffImage.childImageSharp.fixed} />
          <span>Anti Slip Cuff</span>
          {/*<p>*/}
          {/*  A combination of lycra and a thicker band to ensure that your socks*/}
          {/*  stay up through out the day.*/}
          {/*</p>*/}
        </SingleDesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={skinfitImage.childImageSharp.fixed} />
          <span>Skin-fit technology</span>
          {/*<p>*/}
          {/*  Designed and engineered to provide optimal amount of tension and*/}
          {/*  elasticity for a tight yet comfortable fit.*/}
          {/*</p>*/}
        </SingleDesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={heelImage.childImageSharp.fixed} />
          <span>REINFORCED L SHAPED HEEL</span>
          {/*<p>*/}
          {/*  Anatomic design provides natural form around the heel for maximum*/}
          {/*  comfort.*/}
          {/*</p>*/}
        </SingleDesignedContainer>
        <SingleDesignedContainer>
          <Img fixed={toeImage.childImageSharp.fixed} />
          <span>HAND-LINKED TOE</span>
          {/*<p>*/}
          {/*  Traditional technique used by our craftsmen to provide seamless toe*/}
          {/*</p>*/}
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
