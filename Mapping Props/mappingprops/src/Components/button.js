import React from "react";
import "../Assets/Css/button.css";
const Button = (props) =>{
    return (
        <button style={props.type}>{props.buttonText}</button>
    );
}
export default Button;