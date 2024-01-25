import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

//!rafc -> const component snippet

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/about">
            <Layout>
              <About />
            </Layout>
          </Route>
          {/*<Route path="/work">
            <Work />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
