import styled from "@emotion/styled"

const ButtonToggle = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 25px;
  width: 25px;
  color: var(--main-dark);
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;

  svg {
    height: 100%;
    width: 100%;
  }

  :hover {
    background: var(--light-grey);
  }
`

export default ButtonToggle
