import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import APIPage from "./pages/APIPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/api">
        <APIPage />
      </Route>
    </Switch>
  );
}

export default App;
