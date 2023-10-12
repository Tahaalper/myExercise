import {createStore, combineReducers} from "redux";
import cayReducer from "./reducers/cayReducer";
import tostReducer from "./reducers/tostReducer";

const combinedReducers = combineReducers({
    cayState:cayReducer,
    tostState:tostReducer
}
)

const store = createStore(combinedReducers)

export default store;
