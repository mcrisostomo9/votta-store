import React from "react"
import Container from "./Container"
import styled from "@emotion/styled"
import { breakpoints, colors } from "../../utils/styles"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  background: ${colors.lightGrey};
  padding: 3rem 1.5rem 5rem;
`

const FooterContainer = StyledContainer.withComponent("footer")

const LineBreakContainer = styled.div`
  display: flex;
  align-items: center;
`

const Divider = styled.div`
  height: 1px;
  background-color: ${colors.darkGrey};
  flex: 1 1 0;
`

const GuaranteeText = styled.p`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  font-size: 0.75rem;
`

const FooterContent = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    margin: 0;
  }
`

const SocialFooterSection = styled.div`
  display: flex;
  svg {
    width: 25px;
    height: 25px;
    margin-right: 3rem;
  }
`

const StyledLink = styled(Link)``

const Footer = () => {
  const { footerLogo } = useStaticQuery(FOOTER_LOGO_QUERY)

  return (
    <FooterContainer>
      <LineBreakContainer>
        <Divider />
        <Img
          fixed={footerLogo.childImageSharp.fixed}
          style={{ margin: "0 1rem" }}
        />
        <Divider />
      </LineBreakContainer>
      <GuaranteeText>
        If you are not 100% satisfied with your purchase, it may be returned
        within 30 days for a full refund. We offer free US returns for all
        orders.
      </GuaranteeText>
      <FooterContent>
        <FooterSection>
          <h5>Need to contact us?</h5>
          <a
            href="mailto:info@vottasocks.com"
            aria-label="Email Votta Socks customer support"
          >
            info@vottasocks.com
          </a>
        </FooterSection>
        <SocialFooterSection>
          <FaFacebookF />
          <FaInstagram />
        </SocialFooterSection>
        <FooterSection>
          <StyledLink to="/">About Us</StyledLink>
          <StyledLink to="/">Shipping Policy</StyledLink>
          <StyledLink to="/refund-policy">Returns & Exchanges</StyledLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  )
}

const FOOTER_LOGO_QUERY = graphql`
  query footerLogoQuery {
    footerLogo: file(relativePath: { eq: "guarantee-logo.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Footer
