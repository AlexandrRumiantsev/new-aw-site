import { createGlobalStyle } from 'styled-components'

export const TEXT_COLOR_0_7_WHITE = 'hsla(0,0%,100%,0.7)'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 90px;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  .older {
    list-style: none;
    margin: 0 auto;
    width: 660px;
    counter-reset: li;
  }
  .older li {
    border-bottom: dashed 1px #006699;
    margin-top: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    padding: 5px;
  }
  .older a {
    text-decoration: none;
    padding: 10px;
    display: block;
    line-height: 30px;
    color: #3A3A3A;
    font-family: 'EB Garamond', serif;
    font-size: 20px;
  }
  .older a:before {
    display: inline-block;
    content: counter(li);
    counter-increment: li;
    height: 30px;
    width: 30px;
    text-align: center;
    border: solid 1px #dedede;
    margin-right: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
    font-family: 'Fredericka the Great', cursive;
    font-size: 24px;
    -webkit-transition: .4s linear;
    transition: .4s linear;
  }
  .older a:hover:before {
    color:#D72F2C;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`