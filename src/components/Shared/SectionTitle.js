import React from "react"
import styled from "@emotion/styled"

const TitleContainer = styled.div`
  margin: 5rem 0;
`

// TODO fix component
const Title = styled.h4`
  text-align: center;
  margin: 0;
`

const SectionTitle = ({ title }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  )
}

export default SectionTitle
