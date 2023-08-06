import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
: root {
    --color-primary: #333333;
    --color-header: green;
    --color-footer: pink;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-primary);
}

`;

export default GlobalStyle;