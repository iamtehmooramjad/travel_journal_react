import React from "react";
import earthImg from "../images/earth.png"

export default function Header(){
    return(
        <header className="header--container">
            <img src={earthImg} alt="Earth" className="header--image"/>
            <span className="header--title">My Travel Journal</span>
        </header>
    )
}