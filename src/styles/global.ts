import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: ${(props) => props.theme.font}px;
  }

  body {
      transition: all 1s;
      background: ${(props) => props.theme.colors.background};
  }

  body, button {
      font-family: sans-serif;
      color: ${(props) => props.theme.colors.text_input};
  }

  a {
      text-decoration: none;
  }
::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.background};
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors.background};
}

::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.colors.background};
}

`;
