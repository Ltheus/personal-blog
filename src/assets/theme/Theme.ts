import { createTheme } from "@material-ui/core";

export const GlobalTheme = createTheme({
  typography: {
    fontFamily: "Raleway",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 18,
    h1: {
      fontSize: "6rem",
      fontWeight: 700,
      borderBottom: "solid 3px #0a010c",
      marginBottom: "2rem",
      lineHeight: 0.9,
    },
    body1: {
      lineHeight: 1,
    },
  },
  palette: {
    primary: {
      main: "#3f084b",
    },
    secondary: {
      main: "#d97086",
    },
    text: {
      primary: "#0a010c",
      secondary: "#d94070"
    },
    background: {
      default: "#f4edf9",
      paper: "#e8cfff",
    },
    divider: "#0a010c70",
  },
});