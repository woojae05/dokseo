import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color:${(props) => props.theme.secondary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  div{
    background-color:${(props) => props.theme.secondary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    transition:.4s;
  }
  h1,h2,h3,h4,h5,h6,p,a{
    color:${(props) => props.theme.fontColor}
  }
`

export default GlobalStyle