import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    #root,
    body {
      font-size: 1.6rem;
      font-family: ${theme.font.family};
    }
  `}

  
`
