const initialState={
tostSayisi:0
}
const tostReducer=(state=initialState,action)=>{
    if(action.type==="TOST_SATILDI"){
        return{
            tostSayisi:state.tostSayisi + action.payload
        }
    }
    if(action.type==="TOST_IADE"){
        return{
            tostSayisi:state.tostSayisi - action.payload
        }
    }
    return state
}
export default tostReducer;