import axiosClient from "./axiosClient";

const orderApi = {
	//checkout -->create order in order routes
	getOrders: () => {
		const url = "/order/";
		return axiosClient.get(url);
	},
	deleteOrder: (orderId) => {
		const url = `/order/:${orderId}`;
		return axiosClient.delete(url);
	},
	checkout: (newOrder) => {
		const url = "/order/";
		return axiosClient.post(url, newOrder);
	},
};

export default orderApi;
