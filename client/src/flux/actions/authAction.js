import { returnErrors } from "./errorAction";
import authApi from "../api/authApi";

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from "./types";

// Load user
export const loadUser = (id) => async (dispatch) => {
	// User loading
	dispatch({ type: USER_LOADING });

	try {
		const response = await authApi.getProfile(id);
		dispatch({
			type: USER_LOADED,
			payload: response,
		});
	} catch (error) {
		dispatch(returnErrors(error.response.data, error.response.status));
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
	// Request body
	const body = JSON.stringify({ name, email, password });

	try {
		const response = await authApi.register(body);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: response,
		});
	} catch (error) {
		dispatch(
			returnErrors(
				error.response.data,
				error.response.status,
				"REGISTER_FAIL"
			)
		);
		dispatch({ type: REGISTER_FAIL });
	}
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
	// Request body
	const body = JSON.stringify({ email, password });

	try {
		const response = await authApi.login(body);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: response,
		});
	} catch (error) {
		dispatch(
			returnErrors(
				error.response.data,
				error.response.status,
				"LOGIN_FAIL"
			)
		);
		dispatch({ type: LOGIN_FAIL });
	}
};

// Logout User
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS,
	};
};
