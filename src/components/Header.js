import React from "react";
import face from '../images/TrollFace.png'
import '../styles/header.css'

function Header(){
    return (
        <header className="header">
            <div className="header--content">
                <img src = {face} alt ='troll face' className="header--content--image"></img>
                <h2 className="header--content-title">Meme Generator</h2>
            </div>

        </header>
    )
}

export default Header;