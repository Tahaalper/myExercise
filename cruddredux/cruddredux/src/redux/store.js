import {createStore, combineReducers} from "redux";
import studentsReducer from "./reducers/studentsReduer";

const combinedReducers = combineReducers(
    {
        studentsState:studentsReducer,
    }
)

const store = createStore(combinedReducers)
export default store;