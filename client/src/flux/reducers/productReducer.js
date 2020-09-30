import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCT_LOADING,
	GET_CATEGORY,
} from "../actions/types";

const initialState = {
	productList: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORY: {
			return {
				...state,
				productList: action.payload,
				loading: false,
			};
		}
		case DELETE_PRODUCT: {
			const id = action.payload;
			return {
				...state,
				productList: state.productList.filter(
					(product) => product._id !== id
				),
			};
		}
		case ADD_PRODUCT: {
			const newProduct = action.payload;
			const newProductList = [newProduct, ...state.productList];
			return {
				...state,
				productList: newProductList,
			};
		}
		case UPDATE_PRODUCT: {
			const newProduct = action.payload;
			const productIndex = state.productList.findIndex(
				(product) => product._id === newProduct._id
			);
			const newProductList = [...state.productList];

			if (productIndex >= 0) {
				newProductList[productIndex] = newProduct;
			}

			return {
				...state,
				productList: newProductList,
			};
		}
		case PRODUCT_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		default:
			return state;
	}
};
