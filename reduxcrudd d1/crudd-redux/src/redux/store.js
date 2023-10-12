import {createStore,combineReducers} from "redux"

import studentsReducer from "./reducers/studentReducer"

const rootReducer=combineReducers({
    studentsState:studentsReducer
})

const store=createStore(rootReducer)

export default store;