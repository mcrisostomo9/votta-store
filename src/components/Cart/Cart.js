import React, { useContext } from "react"
import { animated } from "react-spring"
import styled from "@emotion/styled"
import { MdClose } from "react-icons/md"

import { breakpoints } from "../../utils/styles"
import { StoreContext } from "../../context/StoreContext"
import LineItem from "./LineItem"
import ButtonToggle from "../Button/ButtonToggle"

const CartContainer = styled(animated.div)`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 49;
  overflow-y: auto;
  background: beige;

  @media (min-width: ${breakpoints.md}) {
    width: 30vw;
    min-width: 450px;
  }
`

const InnerContainer = styled.div`
  ${props => props.isCartLoading && "opacity: .7;"};
`

const CartTopBar = styled.div`
  position: relative;
  h3 {
    text-transform: uppercase;
    text-align: center;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`

const StyledButtonToggle = styled(ButtonToggle)`
  position: absolute;
  right: 0;
`

const Cart = ({ style }) => {
  const { checkout, toggleCartOpen, isCartLoading } = useContext(StoreContext)
  return (
    <CartContainer
      style={{
        ...style,
      }}
    >
      <InnerContainer isCartLoading={isCartLoading}>
        <CartTopBar>
          <StyledButtonToggle onClick={() => toggleCartOpen()}>
            <MdClose />
          </StyledButtonToggle>
          <h3>Your cart</h3>
        </CartTopBar>
        <ContentContainer>
          {checkout.lineItems.length > 0 ? (
            checkout.lineItems.map(item => (
              <LineItem key={item.id} item={item} />
            ))
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
