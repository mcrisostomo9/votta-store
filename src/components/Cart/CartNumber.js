import React from "react"
import styled from "@emotion/styled"

const Number = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  color: #fff;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
  font-weight: 700;
`

const CartNumber = ({ number, className }) => {
  return <Number className={className}>{number}</Number>
}

export default CartNumber
