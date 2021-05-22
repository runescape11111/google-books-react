import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
