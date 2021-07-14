import { createGlobalStyle } from 'styled-components'
import { white } from './colors'

const GlobalStyleComponent = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: Poppins;
    background-color: ${white};
  }
`

export default GlobalStyleComponent
