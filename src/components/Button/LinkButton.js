import styled from "@emotion/styled"
import { Link } from "gatsby"

export const LinkButton = styled(Link)`
  transition: all 300ms ease 0s;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: none;
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Roboto, serif;
  letter-spacing: 1px;
  background: var(--main-dark);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;

  :hover {
    background: var(--accent);
  }
`
