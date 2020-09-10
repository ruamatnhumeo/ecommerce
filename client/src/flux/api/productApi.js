import axiosClient from "./axiosClient";

const productApi = {
	getProduct: (id) => {
		const url = `/product/${id}`;
		return axiosClient.get(url);
	},
	getSearchProducts: (searchTerm) => {
		const url = `/product?searchTerm=${searchTerm}`;
		return axiosClient.get(url);
	},
	getAllProduct: () => {
		const url = "/product/";
		return axiosClient.get(url);
	},
	addProduct: (product) => {
		const url = "/product";
		return axiosClient.post(url, product);
	},
	deleteProduct: (id) => {
		const url = `/product/${id}`;
		return axiosClient.delete(url);
	},
	updateProduct: (id, product) => {
		const url = `/product/${id}`;
		return axiosClient.patch(url, product);
	},
	getCategory: (category) => {
		const url = `/product/${category}`;
		return axiosClient.get(url);
	},
};

export default productApi;
