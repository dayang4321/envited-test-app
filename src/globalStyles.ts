import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 :root{
    --primary-100: #240D57;
    --primary-75: #501FC1;
    --primary-50: #8456EC;
    --primary-25: #E87BF8;

    --purple-50: #CCB6FF;
    --purple-25: #EDE5FF;
    --purple-10: #F6F2FF;

    --text-gray: #4F4F4F;
    --subtitle-gray: #828282;
    --gray-1: #BDBDBD;
    --gray-2: #E0E0E0;
    --gray-3: #F2F2F2;
    --sky: #BDBDBD;

    --font-primary: Helvetica, Sans-Serif;

    box-sizing: border-box;
 }



  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    background-color: var(--purple-10);
  }

   h1,h2,h3,h4,h5,h6,p{
      margin: 0;
    }
`;

export default GlobalStyle;
