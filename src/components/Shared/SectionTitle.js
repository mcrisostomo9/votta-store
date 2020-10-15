import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"

const TitleContainer = styled.div`
  margin: 5rem 0;
`

const Title = styled.h3`
  color: var(--main-dark);
  text-align: center;
  font-size: 1.25rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.75rem;
  }
`

const SectionTitle = ({ title }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  )
}

export default SectionTitle
