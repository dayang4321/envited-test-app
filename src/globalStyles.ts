import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 :root{
    --primary-100: #240D57;
    --primary-75: #501FC1;
    --primary-50: #8456EC;
    --primary-25: #E87BF8;
    --page-background: #DDDDDD;


    --font-primary: Helvetica, Sans-Serif;
 }

 

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    background-color: var(--page-background);
  }
`;

export default GlobalStyle;
