import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    min-height: 100vh;
    height: 100%;
  }

  li {
    list-style: none;
  }
  #tidio-chat{
    display: ${props=>props.location==='/chat'?'none':'inherit'};
  }
  :root {
    --color-primary: #002d9b;
    --color-secondary: #43568d;
    --color-aux: #04164d;
    --color-bg: #8396cd;

    --white: #fff;
    --whitesmoke: #f5f5f5;
    --offwhite: #f4f4f4;
    --black: #000;
    --grey: #808080;
    --grey-1:#535353;
    --lightgrey: #ddd;
    --lightergrey: #eee;
    --midgrey: #eceff1;
    --blue: #0000ff;
    --lightblue: #add8e6;
    --darkblue: #00008b;
    --green: #008000;
    --darkgreen: #006400;
    --yellow: #fff900;
    --red: #ff0000;
    --error: #e4266f;

    --font-text:'Inter', sans-serif;;
    --font-title:'Montserrat', sans-serif;

    --toastify-icon-color-success: var(--color-bg);
    --toastify-icon-color-warning: var(--error);
    --toastify-color-progress-success: var(--color-bg);
    --toastify-color-progress-warning: var(--error);

    --toastify-toast-width: 300px;
    --toastify-toast-min-height: 54px;
    --toastify-toast-max-height: 54px;
    --toastify-font-family: var(--font-text);

  }

  .Toastify__toast-container--top-right {
    top: 110px;
  }

  body, button, input, ::placeholder {
    font-family: var(--font-text);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  @keyframes fadeIn {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  
  @keyframes fadeInLeft {
    from{
      opacity: 0;
      transform: translateX(-200px);
    }
    to{
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes fadeInRight {
    from{
      opacity: 0;
      transform: translateX(200px);
    }
    to{
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;
