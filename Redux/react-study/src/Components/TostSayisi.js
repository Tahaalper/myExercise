import React from "react";
import {useSelector} from "react-redux";
const TostSayisi=()=>{
    const tostState=useSelector((state)=>state.tostState)
    return(
        <p>Şimdiye kadar satılan tost sayısı:
            {tostState.tostSayisi}
        </p>
    )
}
export default TostSayisi;