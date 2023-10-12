import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appDataReducer from "./appDataReducer";

const reducers = combineReducers({
    authState: authReducer,
    appDataState: appDataReducer
})
export default reducers