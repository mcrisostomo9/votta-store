import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useSpring } from "react-spring"
import { MdFilterList } from "react-icons/md"

import { breakpoints } from "../../utils/styles"
import AnimatedMenuWrapper from "../AnimatedMenuWrapper/AnimatedMenuWrapper"

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
    color: var(--teal);
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

const MobileWrapper = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const FilterMenu = styled(AnimatedMenuWrapper)`
  width: 50%;
`

const FilterButton = styled.button`
  border: 1px solid var(--dark-grey);
  background: none;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 150px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  span {
    //font-weight: 700;
    text-transform: uppercase;
  }
`

const CollectionSideNav = ({ collections }) => {
  const [isFilterOpen, setFilterOpen] = useState(false)
  const filterMenu = useSpring({
    transform: isFilterOpen ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
  })
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
                activeStyle={{ color: "var(--teal)" }}
              >
                {title}
              </NavLink>
            </NavItem>
          )
        })}
      </StickyWrapper>
      <MobileWrapper>
        <FilterButton onClick={() => setFilterOpen(!isFilterOpen)}>
          <MdFilterList />
          <span>filter</span>
        </FilterButton>
        <FilterMenu style={filterMenu}>
          <ByCategory>Filter by Category</ByCategory>
          {collections.nodes.map(collection => {
            const { title, handle } = collection
            return (
              <NavItem key={handle}>
                <NavLink
                  to={`/collections/${handle}`}
                  activeStyle={{ color: "var(--teal)" }}
                >
                  {title}
                </NavLink>
              </NavItem>
            )
          })}
        </FilterMenu>
      </MobileWrapper>
    </NavContainer>
  )
}

export default CollectionSideNav
