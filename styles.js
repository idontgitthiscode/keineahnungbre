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

  @font-face {
    font-family: 'Inconsolata';
    src: url('/Inconsolata-VariableFont_wdth,wght.ttf') format('truetype');
    /* Add other font formats here if necessary */
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Inconsolata', system-ui; /* Use 'Inconsolata' as the custom font and fallback to system-ui */
    background-color: var(--color-primary);
  }
`;

export default GlobalStyle;

