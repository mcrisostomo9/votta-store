import React, { useContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { StoreContext } from "../../context/StoreContext"
import { colors } from "../../utils/styles"
import ButtonToggle from "../Button/ButtonToggle"

const ItemContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.lightGrey};
`

const Thumbnail = styled.div`
  width: 50px;
  margin-right: 1rem;
  flex-grow: 0;

  img {
    width: 100%;
  }
`

const DetailsWrapper = styled.div`
  flex-grow: 1;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--small-text);
    margin: 0;
  }
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

const QuantityContainer = styled.div`
  flex-grow: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Quantity = styled.div`
  font-size: 1rem;
`

const ChevronButton = styled(ButtonToggle)`
  height: auto;
  width: 10px;
  outline: none;

  svg {
    color: ${colors.darkGrey};
  }
`

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

  const changeQuantity = value => {
    if (cartQuantity <= 1 && value === -1) {
      return
    }
    setCartQuantity(cartQuantity => {
      return cartQuantity + value
    })
  }

  useEffect(() => {
    // Prevent updating every time component mounts
    if (cartQuantity === quantity) {
      return
    }
    updateProductQuantity(id, cartQuantity)
  }, [cartQuantity, quantity, id, updateProductQuantity])

  return (
    <ItemContainer>
      <Thumbnail>
        <img src={image.src} alt={title} />
      </Thumbnail>
      <DetailsWrapper>
        <p>{title}</p>
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
      <QuantityContainer>
        <ChevronButton onClick={() => changeQuantity(1)}>
          <FaChevronUp />
        </ChevronButton>
        <Quantity>{cartQuantity}</Quantity>
        <ChevronButton onClick={() => changeQuantity(-1)}>
          <FaChevronDown />
        </ChevronButton>
      </QuantityContainer>
    </ItemContainer>
  )
}

export default LineItem
