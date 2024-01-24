import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Dosis, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <App />
          </Route>
          {/* <Route path="/about-me">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route> */}
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
