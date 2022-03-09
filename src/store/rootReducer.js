// root reducer
// Language: javascript
// Path: src\store\rootReducer.js

import { combineReducers } from "redux";
import AuthReducer from "../features/auth/reducer";
import productsReducer from "../features/dashboard/products/productsReducer";
import PopupReducer from "./Popup";

const rootReducer = combineReducers({
    popup: PopupReducer,
    auth: AuthReducer,
    products:productsReducer
});

export default rootReducer