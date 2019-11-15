import React from "react"
import Container from "../Shared/Container"
import styled from "@emotion/styled"
import { useFormik } from "formik"
import { FiGift } from "react-icons/all"
import Button from "../Button/Button"
import { breakpoints, colors } from "../../utils/styles"

const Root = styled.div`
  background: #f9f9f9;
  padding: 5rem 1.5rem;
`

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  grid-row-gap: 1.5rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

const TextContainer = styled.div``

const Text = styled.span`
  font-family: Raleway, sans-serif;
`

const Form = styled.form`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${colors.lightGrey};
  background: #fff;
  padding: 1.5rem;
  border-radius: 50px 0 0 50px;
`

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  return errors
}

const NewsletterSection = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Root>
      <StyledContainer>
        <TextContainer>
          <FiGift />
          <Text>
            Sign up for our newsletter and receive 15% off your next order!
          </Text>
        </TextContainer>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="you@email.com"
          />
          <Button type="submit">Submit</Button>
        </Form>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </StyledContainer>
    </Root>
  )
}

export default NewsletterSection
