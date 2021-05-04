const INITIAL_STATE = {
	category: "",
	description: "",
	product: [],
	selectedProduct: null,
};

export const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "FILL_PRODUCT_DATA":
			return {
				...state,
				...action.payload,
			};
		case "FILL_SELECTED_PRODUCT_DATA":
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
