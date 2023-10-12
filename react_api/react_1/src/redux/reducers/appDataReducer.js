import actionTypes from "../actions/actionTypes";
const initialState = {
    user:null
}

const appDataReducer=(state = initialState,action)=>{

    switch (action.type) {
        case actionTypes.set_app_data:
            return{
                ...state,
                token: action.payload.user
            }
        case actionTypes.remove_app_data:
            return{
                ...state,
                user: null
            }
    
        default:
            return state
    }
    }
    export default appDataReducer