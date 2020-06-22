import React from "react";
import Login from "../src/container/program/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
