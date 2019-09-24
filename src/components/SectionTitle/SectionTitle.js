import React from "react"
import styled from "@emotion/styled"

const TitleContainer = styled.div`
  margin: 5rem 0;
`

const Title = styled.h2`
  text-align: center;
`

const SectionTitle = ({ title }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  )
}

export default SectionTitle
