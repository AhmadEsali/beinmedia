import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from './reset';
import LoeNextArabic from 'assets/fonts/LoewNextArabic.otf';
import LoeNextArabicBold from 'assets/fonts/LoewNextArabicBold.otf';
import LoewNextArabicExtraBold from 'assets/fonts/LoewNextArabicExtraBold.otf';
import LoeNextArabicHeavy from 'assets/fonts/LoewNextArabicHeavy.otf';
import LoeNextArabicMedium from 'assets/fonts/LoeNextArabicMedium.otf';
import { mediaMin } from './utils';

export const GlobalStyles = createGlobalStyle`
 
  ${normalize};
  ${reset};

  html{
    
    font-size:52.5%;
    ${mediaMin('extraLarge')}{
      font-size:62.5%;

    }
  
    &::-webkit-scrollbar {
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(var(--dusk-blue));
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(var(--denim-blue));
  }
  }

  html,body{
    height:100%;
  }
  
  :root {
    --dark-blue: 1, 48, 100;     //#153064
    --dark-slate-blue:37, 65, 118;  //#254176
    --dark-slate-blue-two: 	28, 54, 104 ;//#1c3668
    --dark-slate-blue-three: 31, 58, 110; //#1f3a6e
    --dark-slate-blue-four: 34, 60, 110;//#223c6e
    --blue-grey: 129, 145, 178; //#8191b2
    --light-navy-blue: 42, 73, 134; //#2a4986
    --dusk-blue:36, 65, 123; //#24417b
    --denim-blue:55, 87, 152; //#375798
    --title-color-blue: 29, 75, 139; //#1d428b
    --blue-white:217, 223, 233; //#D9DFE9
    --blue-light:169, 182, 211; //##a9b6d3
    --blue-light-two:167, 181, 210; //##a7b5d2
    --blue-light-three:140, 156, 190; //#8c9cbe
    --orange-dark:232, 56, 102;//#e83866
    --orange-light:229, 122, 60;//#e57a3c
    --cobalt-two : 25, 59, 126//#193b7e



  }

  @font-face {
    font-family: LoewNextArabic;
    src: url(${LoeNextArabic}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: LoeNextArabicBold;
    src: url(${LoeNextArabicBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: LoewNextArabicExtraBold;
    src: url(${LoewNextArabicExtraBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: LoeNextArabicHeavy;
    src: url(${LoeNextArabicHeavy}) format('truetype');
    font-weight: 800;
    font-style: normal;

  }
  @font-face {
    font-family: LoeNextArabicMedium;
    src: url(${LoeNextArabicMedium}) format('truetype');
 
    font-style: normal;

  }
`;
