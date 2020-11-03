import React, { useEffect, useState } from "react"
import SEO from "../components/Shared/seo"
import Layout from "../components/Layout/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import { Index } from "elasticlunr"
import Container from "../components/Shared/Container"
import styled from "@emotion/styled"
import { MdSearch } from "react-icons/md"
import { breakpoints } from "../utils/styles"

const Title = styled.h2`
  text-align: center;
`

const SearchForm = styled.form`
  margin-top: 3rem;
  display: flex;
  padding: 2rem 0;

  svg {
    height: 40px;
    width: 40px;
  }

  input {
    width: 100%;
    border-radius: 3px;
    padding: 0.75rem 0.5rem;
    border: 1px solid var(--light-grey);

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: rgba(99, 179, 237, 1);
    }
  }
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const ProductListingItemLink = styled(Link)`
  text-align: center;
  color: var(--main-dark);
  overflow: hidden;
  text-decoration: none;

  img {
    width: 100%;
  }
`

const IndexPage = () => {
  const { siteSearchIndex } = useStaticQuery(SEARCH_QUERY)

  let index = null

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query.length > 0) {
      index = index || Index.load(siteSearchIndex.index)
      setResults(
        index
          .search(query, { expand: true }) // Accept partial matches
          // Map over each ID and return the full document
          .map(({ ref }) => index.documentStore.getDoc(ref))
      )
    }
  }, [])

  const handleChange = e => {
    const query = e.target.value

    index = index || Index.load(siteSearchIndex.index)
    setQuery(query)
    setResults(
      index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => index.documentStore.getDoc(ref))
    )
  }

  return (
    <Layout>
      <SEO title="Premium Dress Socks" />
      <Container>
        <Title>Search styles</Title>
        <SearchForm>
          <label id="productSearchLabel" htmlFor="productSearchInput">
            <MdSearch />
          </label>
          <input
            id="productSearchInput"
            aria-labelledby="productSearchLabel"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search"
          />
        </SearchForm>
        <div>
          {results.length ? (
            <ProductWrapper>
              {results.map(product => {
                return (
                  <ProductListingItemLink
                    key={product.id}
                    to={`/socks/${product.handle}`}
                  >
                    <img
                      loading="lazy"
                      src={product.image.originalSrc}
                      alt={product.image.altText}
                    />
                    <p>{product.title}</p>
                    <p>${parseInt(product.price, 10)}</p>
                  </ProductListingItemLink>
                )
              })}
            </ProductWrapper>
          ) : null}
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage

const SEARCH_QUERY = graphql`
  query {
    siteSearchIndex {
      index
    }
  }
`
