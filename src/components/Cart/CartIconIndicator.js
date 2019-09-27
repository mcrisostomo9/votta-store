import React, { useContext } from "react"
import { MdShoppingCart } from "react-icons/md"

import ButtonToggle from "../Button/ButtonToggle"
import { StoreContext } from "../../context/StoreContext"

const CartIconIndicator = () => {
  const { toggleCartOpen, isCartOpen } = useContext(StoreContext)
  return (
    <ButtonToggle onClick={() => toggleCartOpen(!isCartOpen)}>
      <MdShoppingCart />
    </ButtonToggle>
  )
}

export default CartIconIndicator
