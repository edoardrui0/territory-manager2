import React from "react";
import AddressList from "./AddressList/AddressList";
import NewAddress from "./NewAddress/NewAddress";
import {
  BrowserRouter as Router,
  Switch,
  Route /* Link */,
} from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AddressList />
        </Route>

        <Route>
          <NewAddress path="/addAddress" />
        </Route>
      </Switch>
    </Router>
  );
}
