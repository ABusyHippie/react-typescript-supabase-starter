import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import { ContainerProvider } from "@jishida/react-awilix";
import Container from './di-container'

export default function() {
  return (
    <ContainerProvider container={Container}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
         </Switch>
      </Router>
      </ContainerProvider>
  );
}