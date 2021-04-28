import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";

export default function() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
         </Switch>
      </Router>
  );
}