import React, { useContext } from "react"
import { animated } from "react-spring"
import styled from "@emotion/styled"
import { MdClose } from "react-icons/md"

import { breakpoints } from "../../utils/styles"
import { StoreContext } from "../../context/StoreContext"
import LineItem from "./LineItem"
import ButtonToggle from "../Button/ButtonToggle"
import CartNumber from "./CartNumber"

const CartContainer = styled(animated.div)`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 49;
  overflow-y: auto;
  background: #fff;

  @media (min-width: ${breakpoints.md}) {
    width: 30vw;
    min-width: 450px;
  }
`

const InnerContainer = styled.div`
  ${props => props.isCartLoading && "opacity: .7;"};
`

const CartTopBar = styled.div`
  padding: 1.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;

  h3 {
    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 1.5rem 3rem 0;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  @media (min-width: ${breakpoints.md}) {
    padding: 3rem;
  }
`

const CloseButton = styled(ButtonToggle)``

const StyledCartNumber = styled(CartNumber)`
  position: relative;
`

const Cart = ({ style }) => {
  const {
    checkout: { lineItems },
    lineItemQuantity,
    toggleCartOpen,
    isCartLoading,
  } = useContext(StoreContext)

  return (
    <CartContainer
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
          <StyledCartNumber number={lineItemQuantity} />
        </CartTopBar>
        <ContentContainer>
          {lineItems.length > 0 ? (
            lineItems.map(item => <LineItem key={item.id} item={item} />)
          ) : (
            <p>is currently empty</p>
          )}
          <button onClick={toggleCartOpen}>Close</button>
        </ContentContainer>
      </InnerContainer>
    </CartContainer>
  )
}

export default Cart
