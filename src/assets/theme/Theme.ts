import { createTheme } from "@material-ui/core";

export const GlobalTheme = createTheme({
  typography: {
    fontFamily: "Armata",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 18,
    h1: {
      fontSize: "6rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "italic",
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 400,
      fontStyle: "italic",
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
      secondary: "#a229e6",
    },
    background: {
      default: "#ebebed",
      paper: "#ebebfd",
    },
    divider: "#a229e6",
  },
});
