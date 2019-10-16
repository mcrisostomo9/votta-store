import React from "react"
import styled from "@emotion/styled"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const SocialLink = styled.a`
  display: inline-block;

  svg {
    width: 25px;
    height: 25px;
  }
`

const SocialIcon = ({ socialNetwork }) => {
  return (
    <>
      {socialNetwork === "facebook" && (
        <SocialLink href="https://facebook.com/vottasocks" target="_blank">
          <FaFacebookF />
        </SocialLink>
      )}
      {socialNetwork === "instagram" && (
        <SocialLink href="https://instagram.com/vottasocks" target="_blank">
          <FaInstagram />
        </SocialLink>
      )}
    </>
  )
}

export default SocialIcon
