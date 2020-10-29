const routes = {
  HOME: "/",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  productDetail(handle) {
    return `/socks/${handle}`
  },
  collections(handle) {
    return `/collections/${handle}`
  },
}

module.exports = { routes }
