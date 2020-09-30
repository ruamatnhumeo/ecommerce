import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./flux/store";

import Header from "./common/Header";
import Home from "./common/Home";
import NotFound from "./common/NotFound";

const Product = React.lazy(() => import("./features/product"));
const Order = React.lazy(() => import("./features/order"));
const Auth = React.lazy(() => import("./features/auth"));
const User = React.lazy(() => import("./features/user"));

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Suspense fallback={<div>Loading...</div>}>
					<BrowserRouter>
						<Header />

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/product" component={Product} />
							<Route path="/order" component={Order} />
							<Route path="/auth" component={Auth} />
							<Route path="/user" component={User} />
							<Route component={NotFound} />
						</Switch>

						{/* <Footer /> */}
					</BrowserRouter>
				</Suspense>
			</div>
		</Provider>
	);
}

export default App;
