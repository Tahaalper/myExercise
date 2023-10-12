import React from "react";
import TostSayisi from "./TostSayisi";
import { useDispatch } from "react-redux";
const TostIslemleri=()=>{
    const dispatch=useDispatch()
    return(
        <div>
            <h1>Tost Islemleri</h1>
            <TostSayisi/>
            <div>
                <button
                onClick={()=>{
                    dispatch({type:"TOST_SATILDI",payload:1})
                }}
                >Satıldı</button>
                <button
                onClick={()=>{
                    dispatch({type:"TOST_IADE",payload:1})
                }}       
                >İade</button>
            </div>
        </div>
    )
}
export default TostIslemleri;