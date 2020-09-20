import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../common/NotFound";
import CheckoutPage from "./pages/Checkout";
import OrdersPage from "./pages/Orders";

function Product(props) {
  const match = useRouteMatch();

  return (
      <Switch>
        <Route exact path={`${match.url}/checkout`} component={CheckoutPage} />
        <Route exact path={`${match.url}/admin/orders`} component={OrdersPage} />
        <Route component={NotFound} />
      </Switch>
  );
}

export default Product;