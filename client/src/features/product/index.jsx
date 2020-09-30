import React, { Fragment, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BreadcrumbAndFilter from "../../common/BreadcrumbAndFilter";
import NotFound from "../../common/NotFound";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";

function Product(props) {
	const match = useRouteMatch();

	return (
		<Fragment>
			<BreadcrumbAndFilter />
			<Switch>
				<Route
					exact
					path={`${match.url}/:category`}
					component={CategoryPage}
				/>
				<Route
					path={`${match.url}/detail/:id`}
					component={ProductPage}
				/>
				<Route component={NotFound} />
			</Switch>
		</Fragment>
	);
}

export default Product;
