import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --main: black;
        --sub: grey;
        --light: white;
        --primary:#00cc7a;
        --primary-light: #e6fff5;
        --primary1: dodgerblue;
        --primary-light1: #1F90FF44;
    }
  
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Roboto", sans-serif;
    }
  
    button {
      background: none;
      border: none;
      outline: none;
    }
  `;

function GlobalStyles() {
  return <GlobalStyle />;
}

export default GlobalStyles;
