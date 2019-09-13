import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./components/signin";
import Registration from "./components/registration";
import Home from "./components/news/home";




render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <Route path="/Registration" component={Registration} />{" "}
      <Route path="/SignIn" component={Signin} />{" "}
    </Switch>{" "}
  </BrowserRouter>,
  document.getElementById("root")
);
