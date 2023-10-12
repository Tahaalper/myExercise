import React from "react";
import { useSelector } from "react-redux";

const CaySayisi=()=>{
    const cayState = useSelector((state)=>state.cayState)
    return(
        <div>
            <p>Şimdiye kadar satılan çay sayısı: {cayState.caySayisi}</p>
        </div>
    )
}
export default CaySayisi