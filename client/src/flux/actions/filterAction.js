import { FILTER_CHANGING, FILTER_CLEAR } from "./types";

export const changeFilter = (conditions) => {
	return {
		type: FILTER_CHANGING,
		payload: conditions,
	};
};

export const clearFilter = () => {
	return {
		type: FILTER_CLEAR,
	};
};
