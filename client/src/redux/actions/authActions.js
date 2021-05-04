import axios from "axios";
import { AUTH_API } from "../../helpers";
import {
	getAddress,
	getCart,
	getPaymentData,
	getTransactionData,
	getWallet,
} from "./userAction";

export const login = (data) => {
	const { username, password } = data;
	return async (dispatch) => {
		try {
			const response = await axios.post(`${AUTH_API}/login`, {
				username,
				password,
			});

			const { accountId, email, roleId, imagepath, token } = response.data;

			localStorage.setItem("token", token);

			if (roleId === 2) {
				await dispatch(getCart({ accountId }));
				await dispatch(getWallet({ accountId }));
				await dispatch(getAddress({ accountId }));
				await dispatch(getPaymentData({ accountId }));
				await dispatch(getTransactionData({ accountId }));
			}

			await dispatch({
				type: "LOGIN",
				payload: {
					accountId,
					username: response.data.username,
					email,
					roleId,
					imagepath,
				},
			});

			dispatch({
				type: "AUTH_FINISHED",
			});
		} catch (err) {
			console.log(err);

			dispatch({
				type: "AUTH_FINISHED",
			});
		}
	};
};

export const keepLogin = (data) => {
	return async (dispatch) => {
		try {
			const token = localStorage.getItem("token");

			const headers = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const response = await axios.post(
				`${AUTH_API}/keep-login`,
				null,
				headers
			);

			const { accountId, roleId } = response.data;

			if (roleId === 2) {
				await dispatch(getCart({ accountId }));
				await dispatch(getWallet({ accountId }));
				await dispatch(getAddress({ accountId }));
				await dispatch(getPaymentData({ accountId }));
				await dispatch(getTransactionData({ accountId }));
			}

			await dispatch({
				type: "LOGIN",
				payload: response.data,
			});

			dispatch({
				type: "AUTH_FINISHED",
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const logout = (data) => {
	return async (dispatch) => {
		try {
			localStorage.removeItem("token");

			dispatch({
				type: "LOGOUT",
			});
		} catch (err) {
			console.log(err);
		}
	};
};
