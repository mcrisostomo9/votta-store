import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"

const BaseContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  padding: 0 1.5rem;

  @media (min-width: ${breakpoints.sm}) {
    max-width: 640px;
  }

  @media (min-width: ${breakpoints.md}) {
    max-width: 768px;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
  }

  //@media (min-width: 1150px) {
  //  max-width: 1150px;
  //}

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
  }

  @media (min-width: ${breakpoints.xxl}) {
    max-width: 1680px;
  }
`

const Container = ({ children, className }) => {
  return <BaseContainer className={className}>{children}</BaseContainer>
}

export default Container
