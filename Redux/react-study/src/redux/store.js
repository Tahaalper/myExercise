import cayReducer from "./reducers/cayReducer";
import tostReducer from "./reducers/tostReducer";
import {createStore} from "redux";
import { combineReducers } from "redux";

const combinedReducers=combineReducers({
    cayState:cayReducer,
    tostState:tostReducer
})

const store = createStore(combinedReducers)



export default store;