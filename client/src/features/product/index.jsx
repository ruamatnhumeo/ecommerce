import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BreadcrumbAndFilter from "../../common/BreadcrumbAndFilter";
import NotFound from "../../common/NotFound";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";

function Product(props) {
  const match = useRouteMatch();

  return (
    <BreadcrumbAndFilter>
      <Switch>
        {/* <Route exact path={`${match.url}/:category`} component={CategoryPage} />
        <Route exact path={`${match.url}/:id/detail`} component={ProductPage} /> */}
        <Route component={NotFound} />
      </Switch>
    </BreadcrumbAndFilter>
  );
}

export default Product;