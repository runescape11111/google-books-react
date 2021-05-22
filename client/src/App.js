import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
        <Navbar />
        <Jumbotron />
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
