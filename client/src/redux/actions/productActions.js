import axios from "axios";
import { PRODUCT_API } from "../../helpers";

export const getProduct = (data) => {
	const { category, orderBy, load } = data;
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`${PRODUCT_API}/category/${category}?orderBy=${orderBy}&load=${load}`
			);

			dispatch({
				type: "FILL_PRODUCT_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getSpecificProduct = (data) => {
	const { product } = data;
	return async (dispatch) => {
		try {
			const response = await axios.get(`${PRODUCT_API}/${product}`);

			dispatch({
				type: "FILL_SELECTED_PRODUCT_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
