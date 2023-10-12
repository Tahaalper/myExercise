import React from "react";
import CaySayisi from "./CaySayisi";
import { useDispatch } from "react-redux";

const CayIslemleri=()=>{
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Çay İşlemleri</h1>
            <CaySayisi/>
            <div>
                <button
                onClick={()=>{
                    dispatch({type:"CAY_IADE",payload:1})
                }}
                >İade</button>
                <button
                onClick={()=>{
                    dispatch({type:"CAY_SATILDI",payload:1})
                }}
                >Satıldı</button>
            </div>
        </div>
    )
}
export default CayIslemleri;