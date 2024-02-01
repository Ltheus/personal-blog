import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-ui/core";
import { Layout } from "./components/Layout/Layout";
import { GlobalTheme } from "./assets/theme/Theme";

const theme = GlobalTheme;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Layout>
          <App />
        </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
