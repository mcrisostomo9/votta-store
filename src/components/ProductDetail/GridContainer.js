import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 3rem;
    align-items: flex-start;
  }
`

export default GridContainer
