import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Judson",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 16
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
