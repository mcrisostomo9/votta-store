import React, { useContext, useState } from "react"
import Container from "../Layout/Container"
import styled from "@emotion/styled"
import Button from "../Button/Button"
import { StoreContext } from "../../context/StoreContext"
import ImgSlider from "./ImgSlider"
import { breakpoints } from "../../utils/styles"
import DisabledButton from "../Button/DisabledButton"

const MainProductContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

const ProductInfoContainer = styled.div``

const Form = styled.form``
const Label = styled.label``
const Input = styled.input``

const ProductDetail = ({ product }) => {
  const {
    images,
    variants: [firstVariant],
    handle,
  } = product
  const {
    addProductToCart,
    isLoading,
    // client
  } = useContext(StoreContext)
  const [available] = useState(firstVariant.availableForSale)
  const [quantity, setQuantity] = useState(1)

  // useEffect(() => {
  //   const checkAvailability = productHandle => {
  //     client.product.fetchByHandle(productHandle).then(product => {
  //       const res = product.variants.filter(
  //         variant => variant.id === firstVariant.shopifyId
  //       )
  //       setAvailable(res[0].available)
  //     })
  //   }
  //   checkAvailability(handle)
  // }, [client, handle, firstVariant])

  const handleSubmit = e => {
    e.preventDefault()
    addProductToCart(firstVariant, quantity, handle)
  }

  return (
    <Container>
      <MainProductContainer>
        <ImgSlider images={images} />
        <ProductInfoContainer>
          <h1>{product.title}</h1>
          <p>${firstVariant.price}</p>
          <p>{product.description}</p>
          {available ? (
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
              <Button type="submit">
                {isLoading ? "Adding to cart..." : "add to cart"}
              </Button>
            </Form>
          ) : (
            <DisabledButton>Sorry, this product is sold out</DisabledButton>
          )}
        </ProductInfoContainer>
      </MainProductContainer>
    </Container>
  )
}

export default ProductDetail
