import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
         </Switch>
      </Router>
    </>
  );
}

export default App;
