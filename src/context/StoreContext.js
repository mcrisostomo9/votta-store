import React, { createContext, useEffect, useState } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: `votta-socks.myshopify.com`,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
})

const defaultValues = {
  isCartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  checkCoupon: () => {},
  isLoading: false,
  setLoading: () => {},
  client,
  checkout: { lineItems: [] },
}
export const StoreContext = createContext(defaultValues)

// Check if it's a browser
const isBrowser = typeof window !== "undefined"

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const toggleCartOpen = () => {
    setCartOpen(!isCartOpen)
  }

  useEffect(() => {
    initializeCheckout()
  })

  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  const initializeCheckout = async () => {
    try {
      // Check if id exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null

      if (currentCheckoutId) {
        // if id exists, fetch checkout from Shopify
        newCheckout = await client.checkout.fetch(currentCheckoutId)
        if (newCheckout.completedAt) {
          newCheckout = await getNewId()
        }
      } else {
        // if id does not, create new checkout
        newCheckout = await getNewId()
        if (isBrowser) {
          localStorage.setItem("checkout_id", newCheckout.id)
        }
      }

      // Set checkout to state
      setCheckout(newCheckout)

      setLoading(false)
    } catch (e) {}
  }

  const addProductToCart = async variantId => {
    try {
      setLoading(true)
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )

      // Buy now button code
      // window.open(newCheckout.webUrl, "_blank")

      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  const removeProductFromCart = async lineItemId => {
    try {
      setLoading(true)
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        lineItemId,
      ])
      setCheckout(newCheckout)
      setCartOpen(true)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  const checkCoupon = async coupon => {
    try {
      setLoading(true)
      const newCheckout = await client.checkout.addDiscount(checkout.id, coupon)

      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      setLoading(false)

      console.error(e)
    }
  }

  const removeCoupon = async coupon => {
    try {
      setLoading(true)
      const newCheckout = await client.checkout.removeDiscount(
        checkout.id,
        coupon
      )

      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addProductToCart,
        checkout,
        toggleCartOpen,
        isCartOpen,
        removeProductFromCart,
        checkCoupon,
        removeCoupon,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
