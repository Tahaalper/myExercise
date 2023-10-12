import React from "react";
import {Link} from "react-router-dom";

const Header=(props)=>{
    const {page} = props
    var background=""
    if(page === "home"){
        background="#abc"
    }
    if(page === "about"){
        background="#593"
    }
    if(page === "contact-us"){
        background="#a10"
    }
    return(
        <header style={{backgroundColor:background}}>
            <ul>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/about">Hakkımızda</Link></li>
                <li><Link to="/contact-us">İletişim</Link></li>
            </ul>
        </header>
    )
}
export default Header;
