import React from "react";
import Card from "../JSXmodel/card";
import countries from "../data/countries";

function Cards(){
    const countryDetails = countries.map(place =>
        <Card
            key = {place.id}
            {...place}
        />
    )
    
    return(
        <>
            {countryDetails}
        </>
    )
}

export default Cards