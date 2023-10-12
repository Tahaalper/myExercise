import React from "react";
import "../Assets/Css/Button.css"
const Button = (props) => {
    console.log(props);
    if(props.type === "alper"){
        return(
            <button onClick={props.onClick} className="alper">{props.text}</button>
        );
    }
    if(props.type === "taha"){
        return(
            <button onClick={props.onClick} className="taha">{props.text}</button>
        );
    }
    return null;
}
export default Button;
