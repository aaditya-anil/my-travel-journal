import React from "react";
import locationIcon from '../assets/LocationIcon.svg';

function Card(props){
    return(
        <div className="card-wrapper">
        <div className="card-container">
            <div className="photo-holder">
                <img src={Object.values(props.image)[0]} alt="place-image" />
            </div>
            <div className="content-holder">
                <div className="country-name-holder">
                    <img src={locationIcon} alt="location-icon" />
                    <h5>{props.countryName}</h5>
                </div>
                <h4>{props.placeName}</h4>
                <h6>{props.dateRange}</h6>
                <p>{props.desc}</p>
            </div>        
        </div>
        <hr></hr>
        </div>

    )
}

export default Card