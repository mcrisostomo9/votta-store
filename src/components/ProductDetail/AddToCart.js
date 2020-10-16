import React, { useContext, useState } from "react"
import styled from "@emotion/styled"
import { breakpoints, colors } from "../../utils/styles"
import Button from "../Button/Button"
import { StoreContext } from "../../context/StoreContext"

const Root = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${colors.darkGrey};
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  border-radius: 3px;

  @media (min-width: ${breakpoints.lg}) {
    width: 40%;
  }
`

const BaseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
`

const DecreaseButton = styled(BaseButton)``
const IncreaseButton = styled(BaseButton)``

const Quantity = styled.div`
  font-size: 1.2rem;
`

const StyledButton = styled(Button)`
  width: 100%;
  margin: 1rem 0 0 0;

  @media (min-width: ${breakpoints.lg}) {
    margin: 0 0 0 1rem;
  }
`

const AddToCart = ({ firstVariant, handle }) => {
  const {
    addProductToCart,
    isLoading,
    // client
  } = useContext(StoreContext)

  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    addProductToCart(firstVariant, quantity, handle)
  }

  const changeQuantity = value => {
    if (quantity <= 1 && value === -1) {
      return
    }
    setQuantity(quantity => quantity + value)
  }

  return (
    <Root>
      <QuantityContainer>
        <DecreaseButton onClick={() => changeQuantity(-1)}>-</DecreaseButton>
        <Quantity>{quantity}</Quantity>
        <IncreaseButton onClick={() => changeQuantity(1)}>+</IncreaseButton>
      </QuantityContainer>
      <StyledButton onClick={addToCart}>
        {isLoading ? "Adding to cart..." : "add to cart"}
      </StyledButton>
    </Root>
  )
}

export default AddToCart
