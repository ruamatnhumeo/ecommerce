import axiosClient from "./axiosClient";

const userApi = {
	// checkout -->create order in order routes
	getUsers: () => {
		const url = "/user/";
		return axiosClient.get(url);
	},
	deleteUser: (userId) => {
		const url = `/user/:${userId}`;
		return axiosClient.delete(url);
	},
};

export default userApi;
