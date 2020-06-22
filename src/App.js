import React from "react";
import Login from "../src/container/program/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../src/container/program/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
