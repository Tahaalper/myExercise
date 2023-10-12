import React from "react";
import {useSelector} from "react-redux";
const TostSayisi =()=>{
    const {tostState} = useSelector((state)=>state);
    return(
        <div>
            <p>satılan toplam tost sayısı : {tostState.tostSayisi}</p>
        </div>
    )
}
export default TostSayisi;