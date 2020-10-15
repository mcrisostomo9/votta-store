import React, { useContext, useEffect, useRef, useCallback } from "react"
import { animated } from "react-spring"
import styled from "@emotion/styled"
import { MdClose } from "react-icons/md"

import { breakpoints } from "../../utils/styles"
import { StoreContext } from "../../context/StoreContext"
import LineItem from "./LineItem"
import ButtonToggle from "../Button/ButtonToggle"
import CartNumber from "./CartNumber"
import EmptyCart from "./EmptyCart"
import Checkout from "./Checkout"

const CartContainer = styled(animated.div)`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 49;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: ${breakpoints.md}) {
    width: 30vw;
    min-width: 450px;
  }
`

const InnerContainer = styled.div`
  height: 100%;
  position: relative;

  ${props => props.isCartLoading && "opacity: .1;"};
`

const CartTopBar = styled.div`
  padding: 1.5rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  background: #fff;

  h3 {
    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 1.5rem 3rem;
  }
`

const LineItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  overflow: hidden;
  overflow-y: scroll;

  @media (min-width: ${breakpoints.md}) {
    padding: 3rem;
  }
`

const CloseButton = styled(ButtonToggle)``

const ItemsInCart = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`
const StyledCartNumber = styled(CartNumber)`
  position: relative;
  bottom: 0;
  left: 0;
  transform: scale(1);
  font-size: 1rem;
  margin-left: 0.25rem;
`

const ShippingContainer = styled.div`
  padding: 1.5rem 1.5rem 0;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    padding: 3rem 1.5rem 0;
  }
`

const ShippingText = styled.p``

const Cart = ({ style }) => {
  const {
    checkout,
    lineItemQuantity,
    toggleCartOpen,
    isCartLoading,
    isCartOpen,
  } = useContext(StoreContext)

  const node = useRef()

  const handleClickOutside = useCallback(
    e => {
      if (node.current.contains(e.target)) {
        // inside click
        return
      }
      // outside click
      toggleCartOpen(false)
    },
    [toggleCartOpen]
  )

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCartOpen, handleClickOutside])

  return (
    <CartContainer
      ref={node}
      style={{
        ...style,
      }}
    >
      <InnerContainer isCartLoading={isCartLoading}>
        <CartTopBar>
          <CloseButton onClick={() => toggleCartOpen()}>
            <MdClose />
          </CloseButton>
          <h3>Your cart</h3>
          <ItemsInCart>
            items
            <br />
            in cart
            <StyledCartNumber number={lineItemQuantity} />
          </ItemsInCart>
        </CartTopBar>
        <ShippingContainer>
          {lineItemQuantity > 0 ? (
            checkout.lineItemsSubtotalPrice.amount >= 50 ? (
              <ShippingText>
                Your order qualifies for free shipping in the US!
              </ShippingText>
            ) : (
              <ShippingText>
                You are ${50 - checkout.lineItemsSubtotalPrice.amount} away from
                free shipping in the US!
              </ShippingText>
            )
          ) : (
            <ShippingText>
              Get free shipping on orders of $50 and above!
            </ShippingText>
          )}
        </ShippingContainer>
        <LineItemsContainer>
          {lineItemQuantity > 0 ? (
            checkout.lineItems.map(item => (
              <LineItem key={item.id} item={item} />
            ))
          ) : (
            <EmptyCart toggleCartOpen={toggleCartOpen} />
          )}
        </LineItemsContainer>
        {lineItemQuantity > 0 && (
          <Checkout checkout={checkout} toggleCartOpen={toggleCartOpen} />
        )}
      </InnerContainer>
    </CartContainer>
  )
}

export default Cart
