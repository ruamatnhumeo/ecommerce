import axiosClient from "./axiosClient";

const authApi = {
	login: (body) => {
		const url = "/auth/login";
		return axiosClient.post(url, body);
	},
	register: (body) => {
		const url = "/auth/register";
		return axiosClient.post(url, body);
	},
	getProfile: (id) => {
		const url = `/auth/${id}`;
		return axiosClient.get(url);
	},
	editProfile: (id, profile) => {
		const url = `/auth/${id}`;
		return axiosClient.patch(url, profile);
	},
	forgetPassword: (email) => {
		const url = "/auth/forget-password";
		return axiosClient.get(url, email);
	},
	resetPassword: (password) => {
		const url = "/auth/reset-password";
		return axiosClient.get(url, password);
	},
};

export default authApi;
