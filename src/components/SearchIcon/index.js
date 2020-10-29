import React from "react"
import { MdSearch } from "react-icons/md"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  margin-left: 1rem;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  height: 40px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover {
    background: var(--light-grey);
  }

  svg {
    height: 100%;
    width: 100%;
  }
`
const SearchIcon = () => {
  return (
    <StyledLink to="/search">
      <MdSearch />
    </StyledLink>
  )
}

export default SearchIcon
