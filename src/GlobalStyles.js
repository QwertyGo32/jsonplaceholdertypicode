import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  // You can continue writing global styles here
  * {
    -webkit-tap-highlight-color: transparent;
    transition: .3s;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #F5F5F6;
  }

  label,
  button,
  a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;