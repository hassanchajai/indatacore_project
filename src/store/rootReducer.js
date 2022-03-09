// root reducer
// Language: javascript
// Path: src\store\rootReducer.js

import { combineReducers } from "redux";
import PopupReducer from "./Popup";

const rootReducer = combineReducers({
    popup: PopupReducer
});

export default rootReducer