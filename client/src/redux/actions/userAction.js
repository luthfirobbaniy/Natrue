import axios from "axios";
import {
	ADDRESS_API,
	CART_API,
	INVENTORY_API,
	PAYMENT_API,
	TRANSACTION_API,
	WALLET_API,
} from "../../helpers";

import Toastify from "toastify-js";

export const getCart = (data) => {
	const { accountId } = data;

	return async (dispatch) => {
		try {
			const response = await axios.get(`${CART_API}/${accountId}`);

			dispatch({
				type: "FILL_CART_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const postCart = (data) => {
	const { accountId, productId, quantity } = data;

	return async (dispatch) => {
		try {
			await axios.post(`${CART_API}`, { accountId, productId, quantity });

			await dispatch(getCart({ accountId }));

			Toastify({
				text: "Added to cart",
				duration: 3000,
				destination: "/cart",
				gravity: "bottom",
				position: "right",
				backgroundColor: "#61b15a",
				className: "app",
				style: {
					fontWeight: "bold",
				},
			}).showToast();
		} catch (err) {
			console.log(err);
		}
	};
};

export const patchQtyCart = (data) => {
	const { accountId, cartId, quantity } = data;

	return async (dispatch) => {
		try {
			await axios.patch(`${CART_API}/patch-qty/${cartId}`, { quantity });

			await dispatch(getCart({ accountId }));
		} catch (err) {
			console.log(err);
		}
	};
};

export const deleteCart = (data) => {
	const { cartId, accountId } = data;

	return async (dispatch) => {
		try {
			await axios.delete(`${CART_API}/delete/${cartId}`);

			await dispatch(getCart({ accountId }));
		} catch (err) {
			console.log(err);
		}
	};
};

export const getWallet = (data) => {
	const { accountId } = data;

	return async (dispatch) => {
		try {
			const response = await axios.get(`${WALLET_API}/${accountId}`);

			dispatch({
				type: "FILL_WALLET_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getAddress = (data) => {
	const { accountId } = data;

	return async (dispatch) => {
		try {
			const response = await axios.get(`${ADDRESS_API}/${accountId}`);

			dispatch({
				type: "FILL_ADDRESS_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getPaymentData = (data) => {
	const { accountId } = data;

	return async (dispatch) => {
		try {
			const response = await axios.get(`${PAYMENT_API}/${accountId}`);

			dispatch({
				type: "FILL_PAYMENT_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const checkout = (data) => {
	const { accountId, address, payment } = data;

	return async (dispatch) => {
		try {
			// Stock Reducing & Stock Checking
			const response = await axios.patch(
				`${INVENTORY_API}/reduce/${accountId}`
			);

			if (response.data.message === "Insufficient Stock")
				return Toastify({
					text: "Insufficient stock, please refresh!",
					duration: 3000,
					gravity: "top",
					position: "center",
					backgroundColor: "#d65858",
					className: "app",
					style: {
						fontWeight: "bold",
					},
				}).showToast();

			// Record transactions
			await axios.post(`${TRANSACTION_API}`, { accountId, address, payment });

			// Emptying the cart
			await axios.delete(`${CART_API}/checkout/${accountId}`);

			await dispatch(getCart({ accountId }));
			await dispatch(getTransactionData({ accountId }));
		} catch (err) {
			console.log(err);
		}
	};
};

export const getTransactionData = (data) => {
	const { accountId } = data;

	return async (dispatch) => {
		try {
			const response = await axios.get(`${TRANSACTION_API}/${accountId}`);

			dispatch({
				type: "FILL_TRANSACTION_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const reorder = (data) => {
	const { accountId, transactionId } = data;

	return async (dispatch) => {
		try {
			await axios.post(`${CART_API}/reorder`, {
				accountId,
				transactionId,
			});

			dispatch(getCart({ accountId }));

			Toastify({
				text: "Added to cart",
				duration: 3000,
				destination: "/cart",
				gravity: "bottom",
				position: "right",
				backgroundColor: "#61b15a",
				className: "app",
				style: {
					fontWeight: "bold",
				},
			}).showToast();
		} catch (err) {
			console.log(err);
		}
	};
};
