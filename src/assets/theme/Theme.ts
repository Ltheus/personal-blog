import { createTheme } from "@material-ui/core";

export const drawerWidth = 180
export const cardHeight = 1170

export const GlobalTheme = createTheme({
  typography: {
    fontFamily: "Armata",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 14,
    h1: {
      fontWeight: 700,
      fontSize: 48
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
      fontStyle: "italic",
    },
    h6: {
      fontSize: 19,
      fontWeight: 400,
      fontStyle: "italic",
    },
    body1: {
      lineHeight: 1.1,
    },
    body2: {
      lineHeight: 1.1
    }
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
