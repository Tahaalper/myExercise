const initialState={
    caySayisi : 0
}

const cayReducer = (state=initialState,action)=>{
if(action.type === "CAY_SATILDI"){
    return{
        caySayisi:state.caySayisi + action.payload
    }}
if(action.type === "CAY_IADE"){
    return{
        caySayisi:state.caySayisi - action.payload
    }
}
return state;
}
export default cayReducer;
