const routes = {
  HOME: "/",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  productDetail(handle) {
    return `/product/${handle}`
  },
  collections(handle) {
    return `/${handle}`
  },
}

module.exports = { routes }
