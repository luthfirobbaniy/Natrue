const INITIAL_STATE = {
	cart: null,
	address: [],
	wallet: null,
	payment: null,
	transaction: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "FILL_CART_DATA":
			return {
				...state,
				cart: action.payload,
			};
		case "FILL_ADDRESS_DATA":
			return {
				...state,
				address: action.payload,
			};
		case "FILL_WALLET_DATA":
			return {
				...state,
				wallet: action.payload,
			};
		case "FILL_PAYMENT_DATA":
			return {
				...state,
				payment: action.payload,
			};
		case "FILL_TRANSACTION_DATA":
			return {
				...state,
				transaction: action.payload,
			};
		default:
			return state;
	}
};
