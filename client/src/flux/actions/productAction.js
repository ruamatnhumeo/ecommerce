import {
	GET_CATEGORY,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCT_LOADING,
} from "./types";
import { returnErrors } from "./errorAction";
import productApi from "../api/productApi";

export const setProductLoading = () => {
	return {
		type: PRODUCT_LOADING,
	};
};

export const addProduct = (newProduct) => async (dispatch) => {
	try {
		const response = await productApi.addProduct(newProduct);
		console.log(response);
		dispatch({
			type: ADD_PRODUCT,
			payload: response,
		});
	} catch (error) {
		dispatch(returnErrors(error.response.data, error.response.status));
	}
};

export const deleteProduct = (productId) => async (dispatch) => {
	try {
		// const response = await productApi.deleteProduct(productId);

		dispatch({
			type: DELETE_PRODUCT,
			payload: productId,
		});
	} catch (error) {
		dispatch(returnErrors(error.response.data, error.response.status));
	}
};

export const updateProduct = (id, product) => async (dispatch) => {
	try {
		const response = await productApi.updateProduct(id, product);
		console.log(response);
		dispatch({
			type: UPDATE_PRODUCT,
			payload: response,
		});
	} catch (error) {
		dispatch(returnErrors(error.response.data, error.response.status));
	}
};

export const getCategory = (category) => async (dispatch) => {
	dispatch(setProductLoading());

	try {
		const response = await productApi.getCategory(category);
		dispatch({
			type: GET_CATEGORY,
			payload: response,
		});
	} catch (error) {
		console.log("error", error);
		dispatch(returnErrors(error.data, error.status));
	}
};
