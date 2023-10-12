import React from "react";
import {useSelector} from "react-redux";
const CaySayisi=()=>{
    const cayState=useSelector((state)=>state.cayState)
    //store'daki stateleri alıp bu componentın içine koyuyor
    return(
        <div>
            <p>Şimdiye kadar satılan çay sayısı:
                {cayState.caySayisi}
            </p>
        </div>
    )
}
export default CaySayisi;