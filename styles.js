import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Your global styles here */
  :root {
    --color-primary: #272829;
    --color-header: #61677A;
    --color-footer: #FFF6E0;
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
