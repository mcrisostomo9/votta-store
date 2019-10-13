import React, { useContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { StoreContext } from "../../context/StoreContext"
import { colors } from "../../utils/styles"

const ItemContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.lightGrey};
`

const Thumbnail = styled.div`
  width: 50px;
  margin-right: 1rem;

  img {
    width: 100%;
  }
`

const DetailsWrapper = styled.div`
  flex-grow: 1;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
`

const RemoveButton = styled.button`
  text-transform: uppercase;
  margin-top: auto;
  color: rgb(124, 122, 125);
  cursor: pointer;
  background: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0;

  div {
    letter-spacing: 1.2px;
    font-size: 0.75rem;
  }
`

const QuantityWrapper = styled.div``

const Input = styled.input``

const LineItem = ({ item }) => {
  const { removeProductFromCart, updateProductQuantity } = useContext(
    StoreContext
  )
  const {
    title,
    variant: { image, price },
    quantity,
    id,
  } = item

  const [cartQuantity, setCartQuantity] = useState(quantity)

  const handleChange = e => {
    const newQuantity =
      e.target.type === "number" ? parseInt(e.target.value, 10) : e.target.value
    setCartQuantity(newQuantity)
    updateProductQuantity(id, newQuantity)
  }

  useEffect(() => {
    setCartQuantity(quantity)
  }, [setCartQuantity, quantity])

  return (
    <ItemContainer>
      <Thumbnail>
        <img src={image.src} alt={title} />
      </Thumbnail>
      <DetailsWrapper>
        <h5>{title}</h5>
        <p>${price}</p>
        <div>
          <RemoveButton
            onClick={() => {
              removeProductFromCart(id)
            }}
          >
            <div>Remove</div>
          </RemoveButton>
        </div>
      </DetailsWrapper>
      <QuantityWrapper>
        <Input type="number" value={cartQuantity} onChange={handleChange} />
      </QuantityWrapper>
    </ItemContainer>
  )
}

export default LineItem
