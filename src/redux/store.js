import counterReducer from "./reducer/counterReducer";
import { legacy_createStore } from "redux";

const store = legacy_createStore(counterReducer,{},window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_() )

export default store;