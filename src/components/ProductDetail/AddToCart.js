import React, { useContext, useState } from "react"
import styled from "@emotion/styled"
import { colors } from "../../utils/styles"
import Button from "../Button/Button"
import { StoreContext } from "../../context/StoreContext"

const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`
const Label = styled.label``

const Input = styled.input`
  margin-top: 0.5rem;
  width: 75px;
  height: 50px;
  padding: 0 1rem;
  border: 1px solid ${colors.lightGrey};
  font-size: 1.2rem;
`

const StyledButton = styled(Button)`
  margin-top: 1rem;
  width: 100%;
`

const AddToCart = ({ firstVariant, handle }) => {
  const {
    addProductToCart,
    isLoading,
    // client
  } = useContext(StoreContext)

  const [quantity, setQuantity] = useState(1)
  const handleSubmit = e => {
    e.preventDefault()
    addProductToCart(firstVariant, quantity, handle)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="quantity">Qty.</Label>
      <Input
        type="number"
        name="quantity"
        min="1"
        onChange={e =>
          setQuantity(
            e.target.type === "number"
              ? parseInt(e.target.value, 10)
              : e.target.value
          )
        }
        value={quantity}
      />
      <StyledButton type="submit">
        {isLoading ? "Adding to cart..." : "add to cart"}
      </StyledButton>
    </Form>
  )
}

export default AddToCart
