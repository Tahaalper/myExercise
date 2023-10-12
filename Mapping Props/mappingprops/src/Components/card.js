import React from "react";
import "../Assets/Css/card.css";
const Card = (props)=>{
    return(
        <div style={{width:"200px"}}>
            <div style={{border :"1px solid"}}>
                <img style={{width:"fitContent"}} alt="" src={props.imgSrc}/>
                <h1>
                    {props.cardTitle}
                </h1>
                <p>
                    {props.shortExplanation}
                </p>
            </div>
        </div>
    );
}
export default Card;