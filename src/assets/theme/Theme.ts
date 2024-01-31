import { createTheme } from "@material-ui/core";

export const GlobalTheme = createTheme({
  typography: {
    fontFamily: "Armata",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 18,
    h1: {
      fontFamily: "Pixelify Sans",
      fontSize: "6rem",
      fontWeight: 700,
      // borderBottom: "solid 3px #0a010c",
      marginBottom: "2rem",
      lineHeight: 0.9,
    },
    h5: {
      fontFamily: "Pixelify Sans",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "Pixelify Sans",
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 0.9,
    },
    body1: {
      lineHeight: 1,
    },
  },
  palette: {
    primary: {
      main: "#a229e6",
    },
    secondary: {
      main: "#eaea4c",
    },
    text: {
      primary: "#0c0311",
      secondary: "#a229e6 ",
    },
    background: {
      default: "#ebebed",
      paper: "#ebebfd",
    },
    divider: "#a229e6",
  },
});