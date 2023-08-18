import React from "react";  
import { Link }from "react-router-dom"
import NavTabs from "./NavTabs";

function Header() {
    return (
        <header className="flex-row px-1">
            <div className="logo">
            <h1>
            <link to="/">Varney Vincent</link> 
            </h1>
            </div>
        </header>
    );
}

export default Header;
