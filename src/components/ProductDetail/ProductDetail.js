import React, { useContext, useState } from "react"
import Container from "../Layout/Container"
import styled from "@emotion/styled"
import Button from "../Button/Button"
import { StoreContext } from "../../context/StoreContext"
import ImgSlider from "./ImgSlider"
import { breakpoints, colors } from "../../utils/styles"
import DisabledButton from "../Button/DisabledButton"

const MainProductContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 3rem;
  }
`

const ProductInfoContainer = styled.div`
  max-width: 500px;
`

const ProductTitle = styled.h1``

const ProductPrice = styled.div`
  font-size: 1.5rem;
`

const ProductDescription = styled.div``

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
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>${firstVariant.price}</ProductPrice>
          <ProductDescription
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
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
              <StyledButton type="submit">
                {isLoading ? "Adding to cart..." : "add to cart"}
              </StyledButton>
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
