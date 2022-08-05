import React from "react";

export default function Card(){
    return(
        <div className="card--container">
            <div className="grid--image">
                <img src="https://source.unsplash.com/WLxQvbMyfas" alt="Travel Place" className="grid--image_location"/>
            </div>
            <div className="grid--content"></div>
        </div>
    )
}