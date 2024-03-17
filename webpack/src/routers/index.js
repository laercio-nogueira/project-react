import React from "react";
import { BrowserRouter, Route, HashRouter, Switch, Redirect } from "react-router-dom";
import DashboardPage from "../components/pages/DashboardPage";
import ProductsPage from "../components/pages/ProductsPage";
import NavBarModule from "../components/molecules/NavBarModule";

export default () => (
  <BrowserRouter>
    <NavBarModule />
    <HashRouter>
      <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/products/:id" component={ProductsPage} exact />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  </BrowserRouter>
)