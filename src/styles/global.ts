import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body{
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
  }
`
