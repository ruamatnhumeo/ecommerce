import { returnErrors } from "./errorAction";
// import orderApi from "../api/orderApi";

import { CART_ADD, CART_REMOVE, CART_CLEAR } from "./types";

// add product in cart
export const cartAdd = (product) => (dispatch, getState) => {
	const newBag = [...getState().cart.bag];
	const productId = product.id;
	const foundIndex = newBag.findIndex((item) => item.id === productId);

	// Increase quantity if existing
	if (foundIndex >= 0) {
		newBag[foundIndex] = {
			...newBag[foundIndex],
			quantity: newBag[foundIndex].quantity + 1,
		};
	} else {
		// Add new item
		newBag.push(product);
	}

	dispatch({
		type: CART_ADD,
		payload: newBag,
	});

	localStorage.setItem("cart", JSON.stringify(newBag));
};

// remove product in cart
export const cartRemove = (productId) => (dispatch, getState) => {
	const newBag = [...getState().cart.bag];
	const foundIndex = newBag.findIndex((product) => product.id === productId);

	// check quantity of product
	if (newBag[foundIndex].quantity === 1) {
		newBag.splice(foundIndex, 1);
	} else {
		newBag[foundIndex] = {
			...newBag[foundIndex],
			quantity: newBag[foundIndex].quantity - 1,
		};
	}
	dispatch({
		type: CART_REMOVE,
		payload: newBag,
	});

	localStorage.setItem("cart", JSON.stringify(newBag));
};

// checkout
export const cartCheckOut = (newOrder) => async (dispatch) => {
	try {
		// const response = await orderApi.checkout(newOrder);

		dispatch({
			type: CART_CLEAR,
		});

		localStorage.clear("cart");
	} catch (error) {
		dispatch(returnErrors(error.response.data, error.response.status));
	}
};

export const cartClear = () => (dispatch) => {
	dispatch({
		type: CART_CLEAR,
	});

	localStorage.clear("cart");
};
