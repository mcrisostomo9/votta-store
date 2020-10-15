import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { breakpoints } from "../../utils/styles"
import MobileSideNav from "./MobileSideNav"

const NavContainer = styled.div`
  position: relative;
`

const StickyWrapper = styled.ul`
  display: none;
  flex-direction: column;
  list-style: none;
  padding: 0;
  align-items: flex-end;

  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    position: sticky;
    top: 10%;
  }
`

const NavItem = styled.li`
  margin-top: 1rem;
  text-align: right;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.75rem;

  :hover {
    color: var(--grey);
  }

  @media (min-width: ${breakpoints.lg}) {
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1rem;
  }
`

const ByCategory = styled.h6`
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  text-align: right;
`

const CollectionSideNav = ({ collections }) => {
  return (
    <NavContainer>
      <StickyWrapper>
        <ByCategory>Filter by Category</ByCategory>
        {collections.nodes.map(collection => {
          const { title, handle } = collection
          return (
            <NavItem key={handle}>
              <NavLink
                to={`/collections/${handle}`}
                activeStyle={{ color: "var(--grey)" }}
              >
                {title}
              </NavLink>
            </NavItem>
          )
        })}
      </StickyWrapper>
      <MobileSideNav collections={collections} />
    </NavContainer>
  )
}

export default CollectionSideNav
