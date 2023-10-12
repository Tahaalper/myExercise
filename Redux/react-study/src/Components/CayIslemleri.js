import React from "react";
import CaySayisi from "./CaySayisi";
import { useDispatch } from "react-redux"; //actionu dispatch ediyoruz

const CayIslemleri=()=>{
    const dispatch = useDispatch() //bir objeye usedispatch
    //fonksiyonunun özelliğini atadık
    return(
        <div>
            <h1>Çay İşlemleri</h1>
            <CaySayisi/>
            <div>
                <button
             onClick={()=>{
                dispatch({type:"CAY_SATILDI",payload:1})
             }}
                >Satıldı</button>
                <button
             onClick={()=>{
                dispatch({type:"CAY_IADE",payload:1})
             }}
                >İade</button>
            </div>
            <hr/>
        </div>
    )
}
export default CayIslemleri;