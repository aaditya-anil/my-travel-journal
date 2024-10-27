import React from "react";
import globeImage from '../assets/Globe.svg'

function Navbar(){
    return(
        <div className="navbar-container">
            <img src={globeImage} alt="world-logo" />
            <h4 className="travel-journal-logo">my travel journal.</h4>
        </div>
    )
}

export default Navbar