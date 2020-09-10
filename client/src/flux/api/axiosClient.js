import axios from "axios";
import queryString from "query-string";
import { isAuthorization } from "./isAuthorization";

const axiosClient = axios.create({
	baseURL: "http://localhost:5000/",
	headers: {
		"Content-Type": "application/json",
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
	async (config) => {
		// Handle token here ...
		if (isAuthorization()) {
			config.headers["x-auth-token"] = `Bearer ${isAuthorization()}`;
		}
		// console.log('config axios' ,config);
		return config;
	},
	(error) => {
		throw error;
	}
);

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(error) => {
		throw error;
	}
);

export default axiosClient;
