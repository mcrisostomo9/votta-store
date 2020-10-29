import React, { useContext } from "react"
import { MdShoppingCart } from "react-icons/md"
import ButtonToggle from "../Button/ButtonToggle"
import { StoreContext } from "../../context/StoreContext"
import CartNumber from "./CartNumber"
import styled from "@emotion/styled"

const StyledButtonToggle = styled(ButtonToggle)`
  margin-left: 1rem;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: var(--light-grey);
  }
`

const CartIconIndicator = ({ className }) => {
  const {
    toggleCartOpen,
    isCartOpen,
    checkout: { lineItems },
    lineItemQuantity,
  } = useContext(StoreContext)
  return (
    <StyledButtonToggle
      className={className}
      onClick={() => toggleCartOpen(!isCartOpen)}
    >
      <MdShoppingCart />
      {lineItems.length > 0 && <CartNumber number={lineItemQuantity} />}
    </StyledButtonToggle>
  )
}

export default CartIconIndicator
