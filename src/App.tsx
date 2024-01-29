import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";
import Work from "./pages/Work";

//!rafc -> const component snippet

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
    </Switch>
  );
}

export default App;
