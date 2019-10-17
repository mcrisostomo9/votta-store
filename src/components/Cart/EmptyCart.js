import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import OutlineButton from "../Button/OutlineButton"
import Button from "../Button/Button"

const EmptyContainer = styled.div`
  p {
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }
`

const ShopNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLink = styled(Link)`
  margin-top: 1rem;
  width: 100%;
`

const StyledOutlineButton = styled(OutlineButton)`
  width: 100%;
`

const StyledButton = styled(Button)`
  margin-top: 1rem;
  width: 100%;
`

const EmptyCart = ({ toggleCartOpen }) => {
  return (
    <EmptyContainer>
      <p>Your cart is empty.</p>
      <ShopNowContainer>
        <StyledLink to="/collections/mens-collection" onClick={toggleCartOpen}>
          <StyledOutlineButton>Men's</StyledOutlineButton>
        </StyledLink>
        <StyledLink
          to="/collections/womens-collection"
          onClick={toggleCartOpen}
        >
          <StyledOutlineButton>Women's</StyledOutlineButton>
        </StyledLink>
        <StyledLink to="/collections/dress-sock-packs" onClick={toggleCartOpen}>
          <StyledOutlineButton>Sock Packs</StyledOutlineButton>
        </StyledLink>
        <StyledButton onClick={toggleCartOpen}>Start Shopping</StyledButton>
      </ShopNowContainer>
    </EmptyContainer>
  )
}

export default EmptyCart
