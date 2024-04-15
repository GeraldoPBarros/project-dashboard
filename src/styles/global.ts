'use client'
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    font-family: "Nunito Sans";

    --romanSilver: #87889B;
    --wishfulBlue: #DBDBE8;
    --cultured: #F4F4FA;
    --aliceBlue: #F3F2FF;
    
    --lavender: #E4E0FF;
    --maximumBluePurple: #B9B1EF;
    --ceil: #9A91DB;
    --darkBlueGray: #6963A9;
    --deepKoamaru: #3A3979;
    --japaneseLaurel: #393A75;

    --greenishYellowB: #939F54;
    --greenishYellowC: #97A356;
    --pesto: #6C7636;
    --wildWillow: #B1BE69;
    --greenishYellowA: #CEDEA8;
    --whitishYellow: #FAFFE0;

    --bangladeshGreen: #00605B;
    --farbe: #275E5B;
    --darkCyan: #118E88;
    --bayside: #55BFB8;
    --aquamarine: #74F2DE;
    --aeroBlue: #D1FFF1;

    --mintCream: #F2FFFB;
    --white: #FFFFFF;
    --guyabano: #F7F7F7;
    --ceilingBrightWhite: #EAEAEA;
    --reflection: #D5D5D5;
    --philippineSilver: #B1B1B1;
    --battleshipGrey: #868686;
    --davysGrey: #575757;
    --jet: #343434;
    --gray: #C7C7C7;

    background-color: #f7f7f7;

    --verySmall: 8px;
    --small: 12px;
    --smallMedium: 16px;
    --medium: 20px;
    --bigMedium: 24px;
    --big: 32px;
    --veryBig: 40px;

    --regular-font-size: 16px;
  }


  * {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    padding: 0;
  }

  html, body, main, header {
    display: flex;
    width: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }



  button {
    cursor: pointer;
  }
`;
