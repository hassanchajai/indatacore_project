// root reducer
// Language: javascript
// Path: src\store\rootReducer.js

import { combineReducers } from "redux";
import AuthReducer from "../features/auth/reducer";
import PopupReducer from "./Popup";

const rootReducer = combineReducers({
    popup: PopupReducer,
    auth: AuthReducer
});

export default rootReducer