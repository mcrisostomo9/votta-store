import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"
import Button from "../Button/Button"
import OutlineButton from "../Button/OutlineButton"

const CheckoutContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: ${breakpoints.md}) {
    padding: 3rem;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
`

const StyledOutlineButton = styled(OutlineButton)`
  margin-top: 1rem;
  width: 100%;
`

const Checkout = ({ checkout, toggleCartOpen }) => {
  console.log(checkout)
  return (
    <CheckoutContainer>
      <a href={checkout.webUrl}>
        <StyledButton>
          Checkout now - ${Math.round(checkout.lineItemsSubtotalPrice.amount)}
        </StyledButton>
      </a>
      <StyledOutlineButton onClick={() => toggleCartOpen()}>
        Continue Shopping
      </StyledOutlineButton>
    </CheckoutContainer>
  )
}

export default Checkout
