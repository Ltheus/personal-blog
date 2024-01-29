import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Work from "./pages/Work";

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
