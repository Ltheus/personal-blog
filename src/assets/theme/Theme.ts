import { createTheme } from "@material-ui/core";

export const GlobalTheme = createTheme({
  typography: {
    fontFamily: "Judson",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 20,
    h1: {
      fontSize: "10rem",
      fontWeight: 700,
      borderBottom: "solid 1px #1d0d04",
      marginBottom: "2rem",
      lineHeight: 1
    },
  },
  palette: {
    primary: {
      main: "#c66025",
    },
    secondary: {
      main: "#eaba77",
    },
    text: {
      primary: "#1d0d04",
    },
    background: {
      default: "#dbc3a4",
      paper: "#dbc3a4",
    },
    divider: "#1d0d0448",
  },
});