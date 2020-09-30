import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../common/NotFound";
import UsersPage from "./pages/Users";

function User() {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route
				exact
				path={`${match.url}/admin/users`}
				component={UsersPage}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}

export default User;
