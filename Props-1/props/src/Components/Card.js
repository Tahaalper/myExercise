import React from "react";
import "../Assets/Css/Card.css"
const Card = (props) =>{
    return(
        <div className={props.className}>
           <img src={props.singer}/>
            <h1>
                {props.title}
            </h1>
            <p>{props.article}</p>
        </div>
    );
}
export default Card;