import { combineReducers } from "redux";
import productReducer from "./productReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
	products: productReducer,
	error: errorReducer,
	auth: authReducer,
	cart: cartReducer,
	filter: filterReducer,
});
