import React, { useContext } from "react"
import { MdShoppingCart } from "react-icons/md"
import ButtonToggle from "../Button/ButtonToggle"
import { StoreContext } from "../../context/StoreContext"
import CartNumber from "./CartNumber"

const CartIconIndicator = ({ className }) => {
  const {
    toggleCartOpen,
    isCartOpen,
    checkout: { lineItems },
    lineItemQuantity,
  } = useContext(StoreContext)
  return (
    <ButtonToggle
      className={className}
      onClick={() => toggleCartOpen(!isCartOpen)}
    >
      <MdShoppingCart />
      {lineItems.length > 0 && <CartNumber number={lineItemQuantity} />}
    </ButtonToggle>
  )
}

export default CartIconIndicator
