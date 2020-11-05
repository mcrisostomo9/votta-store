import React from "react"
import Container from "../Shared/Container"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"
import { Link } from "gatsby"
import SocialIcon from "../SocialIcon/SocialIcon"

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  background: var(--background);
  padding: 3rem 1.5rem 5rem;
`

const FooterContainer = StyledContainer.withComponent("footer")

const FooterContent = styled.div`
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
  color: inherit;
`

const StyledLink = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
  color: inherit;

  :hover {
    color: var(--orange);
  }
`

const Email = styled.a`
  margin-top: 1rem;
  color: inherit;
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

const Copyright = styled.div``

const CopyrightLinks = styled(StyledLink)`
  margin-top: 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterSectionTitle>Shop</FooterSectionTitle>
          <StyledLink to="/collections/mens">Men&apos;s</StyledLink>
          <StyledLink to="/collections/womens">Women&apos;s</StyledLink>
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
            <SocialIcon socialNetwork="pinterest" />
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

// const FOOTER_LOGO_QUERY = graphql`
//   query footerLogoQuery {
//     footerLogo: file(relativePath: { eq: "guarantee-logo.png" }) {
//       childImageSharp {
//         fixed(width: 200) {
//           ...GatsbyImageSharpFixed_withWebp_tracedSVG
//         }
//       }
//     }
//   }
// `

export default Footer
