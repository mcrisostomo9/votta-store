import React, { useCallback, useEffect, useRef, useState } from "react"
import { useSpring } from "react-spring"
import styled from "@emotion/styled"
import { MdFilterList, MdClose } from "react-icons/md"
import { Link } from "gatsby"
import { breakpoints, colors } from "../../utils/styles"
import AnimatedMenuWrapper from "../AnimatedMenuWrapper/AnimatedMenuWrapper"
import ButtonToggle from "../Button/ButtonToggle"

const MobileWrapper = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const FilterButton = styled.button`
  border: 1px solid var(--black);
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

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 1rem;
`

const Title = styled.h6`
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  text-align: left;
`

const FilterMenu = styled(AnimatedMenuWrapper)`
  width: 80%;
  border-right: 1px solid ${colors.lightGrey};
  overflow-y: hidden;
`

const ListContainer = styled.ul`
  padding: 0 1rem;
  list-style: none;
  overflow-y: auto;
  margin: 0;
  height: 100vh;
`

const NavItem = styled.li`
  margin-top: 1rem;
  text-align: left;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.75rem;

  :hover {
    color: var(--accent);
  }
`

const MobileSideNav = ({ collections }) => {
  const [isFilterOpen, setFilterOpen] = useState(false)

  const filterMenu = useSpring({
    transform: isFilterOpen ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
  })

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen)
  }

  const node = useRef()

  const handleClickOutside = useCallback(
    e => {
      if (node.current.contains(e.target)) {
        // inside click
        return
      }
      // outside click
      setFilterOpen(false)
    },
    [setFilterOpen]
  )

  useEffect(() => {
    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isFilterOpen, handleClickOutside])

  return (
    <MobileWrapper ref={node}>
      <FilterButton onClick={toggleFilter}>
        <MdFilterList />
        <span>filter</span>
      </FilterButton>
      <FilterMenu style={filterMenu}>
        <TopContainer>
          <Title>Filter by Collection</Title>
          <ButtonToggle onClick={() => setFilterOpen(false)}>
            <MdClose />
          </ButtonToggle>
        </TopContainer>
        <ListContainer>
          {collections.nodes.map(collection => {
            const { title, handle } = collection
            return (
              <NavItem key={handle}>
                <NavLink
                  to={`/collections/${handle}`}
                  activeStyle={{ color: "var(--accent)" }}
                >
                  {title}
                </NavLink>
              </NavItem>
            )
          })}
        </ListContainer>
      </FilterMenu>
    </MobileWrapper>
  )
}

export default MobileSideNav
