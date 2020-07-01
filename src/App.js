import React from "react";
import Login from "../src/container/program/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../src/container/program/Register";
import UserProfile from "../src/container/userSection/userProfileSetup";
import OrderRide from "./container/userSection/orderRide";
// import testing from "./container/userSection/testing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/orderride" component={OrderRide}></Route>
        <Route path="/" component={UserProfile}></Route>
        {/* <Route path="/testing" component={testing}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
