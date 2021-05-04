import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
	authReducer,
	productReducer,
	userReducer,
});
