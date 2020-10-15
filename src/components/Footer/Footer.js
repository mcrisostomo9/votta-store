import React from "react"
import Container from "../Shared/Container"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import SocialIcon from "../SocialIcon/SocialIcon"

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  background: var(--light-bg);
  padding: 3rem 1.5rem 5rem;
`

const FooterContainer = StyledContainer.withComponent("footer")

const LineBreakContainer = styled.div`
  display: flex;
  align-items: center;
`

const Divider = styled.div`
  height: 1px;
  background-color: var(--main-dark);
  flex: 1 1 0;
`

const GuaranteeText = styled.p`
  text-align: center;
  max-width: 500px;
  margin: 1rem auto;
  width: 100%;
  font-size: 1rem;
  line-height: 1.75;
`

const FooterContent = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 2.5rem;
  justify-items: center;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    text-align: left;
  }
`

const SocialFooterSection = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-around;

  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-start;

    a {
      margin-right: 3rem;
    }
  }
`

const FooterSectionTitle = styled.h5`
  font-size: 1.25rem;
`

const StyledLink = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
`

const Email = styled.a`
  margin-top: 1rem;
`

const CopyrightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  font-size: 0.75rem;
  justify-items: center;

  @media (min-width: ${breakpoints.md}) {
    grid-column: 1/4;
  }
`

const Copyright = styled.div`
  font-family: "Raleway", sans-serif;
`

const CopyrightLinks = styled(StyledLink)`
  margin-top: 0;
`

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
          <FooterSectionTitle>Shop</FooterSectionTitle>
          <StyledLink to="/collections/mens-collection">Men's</StyledLink>
          <StyledLink to="/collections/womens-collection">Women's</StyledLink>
          <StyledLink to="/collections/dress-sock-packs">Sock Packs</StyledLink>
          <StyledLink to="/collections/mens-premium">Premium</StyledLink>
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>Support</FooterSectionTitle>
          <StyledLink to="/shipping-policy">Shipping Policy</StyledLink>
          <StyledLink to="/returns-and-exchanges">
            Returns and Exchanges
          </StyledLink>
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>Need to contact us?</FooterSectionTitle>
          <Email
            href="mailto:info@vottasocks.com"
            aria-label="Email Votta Socks customer support"
          >
            info@vottasocks.com
          </Email>
          <SocialFooterSection>
            <SocialIcon socialNetwork="facebook" />
            <SocialIcon socialNetwork="instagram" />
          </SocialFooterSection>
        </FooterSection>
        <CopyrightSection>
          <Copyright>© VOTTA SOCKS {new Date().getFullYear()}</Copyright>
          <CopyrightLinks to="/privacy-policy">Privacy Policy</CopyrightLinks>
          <CopyrightLinks to="/terms-of-service">
            Terms of service
          </CopyrightLinks>
        </CopyrightSection>
      </FooterContent>
    </FooterContainer>
  )
}

const FOOTER_LOGO_QUERY = graphql`
  query footerLogoQuery {
    footerLogo: file(relativePath: { eq: "guarantee-logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Footer
