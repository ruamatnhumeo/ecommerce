import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../common/NotFound";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import ResetPasswordPage from "./pages/ResetPassword";

function Product(props) {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route
				exact
				path={`${match.url}/register`}
				component={RegisterPage}
			/>
			<Route
				exact
				path={`${match.url}/profile/:userId`}
				component={ProfilePage}
			/>
			<Route
				exact
				path={`${match.url}/reset-password/:token`}
				component={ResetPasswordPage}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}

export default Product;
