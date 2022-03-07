import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 300;
      src: local("Gilroy"),
          url("fonts/Gilroy-Light.woff") format("woff"),
          url("fonts/Gilroy-Light.woff2") format("woff2"),
          url("fonts/Gilroy-Light.ttf") format("ttf");
  }

  @font-face {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 500;
      src: local("Gilroy"),
          url("fonts/Gilroy-Medium.woff") format("woff"),
          url("fonts/Gilroy-Medium.woff2") format("woff2"),
          url("fonts/Gilroy-Medium.ttf") format("ttf");
  }

  @font-face {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      src: local("Gilroy"), 
          url("fonts/Gilroy-Regular.woff") format("woff"),
          url("fonts/Gilroy-Regular.woff2") format("woff2"),
          url("fonts/Gilroy-Regular.ttf") format("ttf"), 

  }

  @font-face {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 700;
      src: local("Gilroy"),
          url('fonts/Gilroy-Bold.woff') format("woff"),
          url('fonts/Gilroy-Bold.woff2') format("woff2"),
          url('fonts/Gilroy-Bold.ttf') format("ttf");
  }

  @font-face {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 800;
      src: local("Gilroy"),
          url("fonts/Gilroy-Extrabold.woff") format("woff"),
          url("fonts/Gilroy-Extrabold.woff2") format("woff2"),
          url("fonts/Gilroy-Extrabold.ttf") format("ttf"),
  }

  html {
    font-family: "Gilroy";
    font-weight: 700;
  }

  body, p, ul, h1 {
    margin: 0
  }

  body::-webkit-scrollbar {
    display: none;
  }

  main {
    width: 100%;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container img {
    position: absolute;
  }

`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
