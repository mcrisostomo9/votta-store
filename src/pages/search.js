import React, { useEffect, useState } from "react"
import SEO from "../components/Shared/seo"
import Layout from "../components/Layout/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import { Index } from "elasticlunr"
import queryString from "query-string"
import Container from "../components/Shared/Container"
import styled from "@emotion/styled"
import { MdSearch } from "react-icons/md"
import { breakpoints } from "../utils/styles"
import { routes } from "../data/routes"

const Title = styled.h3`
  text-align: center;
`

const SearchForm = styled.form`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.25rem;
    height: 2rem;
    width: 2rem;
  }

  input {
    width: 100%;
    border-radius: 3px;
    padding: 0.75rem 0.5rem 0.75rem 2.25rem;
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
  margin-top: 1rem;
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
    transition: all 300ms;
  }

  :hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    z-index: 1;
    position: relative;
  }

  p {
    z-index: 10;
    margin: 0;
    position: relative;
  }
`

const ResultsContainer = styled(Container)`
  text-align: center;
`

function IndexPage({ location }) {
  const { siteSearchIndex } = useStaticQuery(SEARCH_QUERY)

  let index = null

  const parameter1 = queryString.parse(location.search)
  console.log(parameter1)

  const [query, setQuery] = useState("")
  const [results, setResults] = useState({
    items: [],
    notFound: false,
  })

  // useEffect(() => {
  //   if (query.length > 0) {
  //     index = index || Index.load(siteSearchIndex.index)
  //     setResults(
  //       index
  //         .search(query, { expand: true }) // Accept partial matches
  //         // Map over each ID and return the full document
  //         .map(({ ref }) => index.documentStore.getDoc(ref))
  //     )
  //   }
  // }, [])

  const handleChange = e => {
    const query = e.target.value
    setQuery(query)
  }

  const handleSubmit = e => {
    e.preventDefault()
    index = index || Index.load(siteSearchIndex.index)
    const res = index
      .search(query, { expand: true }) // Accept partial matches
      // Map over each ID and return the full document
      .map(({ ref }) => index.documentStore.getDoc(ref))
    if (res.length > 0) {
      setResults({ items: res, notFound: false })
    } else {
      setResults({ items: [], notFound: true })
    }
  }
  return (
    <Layout>
      <SEO title="Search" />
      <Container>
        <Title>Search styles</Title>
        <SearchForm onSubmit={handleSubmit}>
          <label id="productSearchLabel" htmlFor="productSearchInput">
            <MdSearch color="var(--grey)" />
          </label>
          <input
            id="productSearchInput"
            aria-labelledby="productSearchLabel"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search for styles"
          />
        </SearchForm>
        <ResultsContainer>
          {results.items.length > 0 && !results.notFound && (
            <p>Search results for &quot;{query}&quot;</p>
          )}
          {query.length > 0 && results.notFound && (
            <p>There are no products that match &quot;{query}&quot;</p>
          )}
          {results.items.length ? (
            <ProductWrapper>
              {results.items.map(product => {
                return (
                  <ProductListingItemLink
                    key={product.id}
                    to={routes.productDetail(product.handle)}
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
        </ResultsContainer>
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
