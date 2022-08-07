import React from "react";
import location from "../images/location.png"

export default function Card(props){
    return(
        <div className="card--container">
            <div className="grid--image">
                <img src={props.imageUrl} alt="Travel Place" className="grid--image_location"/>
            </div>
            <div className="grid--content">
                <div className="location--info">
                    <img src={location} alt="Location" className="location--icon"/>
                    <p className="location--name">{props.location}</p>
                    <a className="google--maps_text" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="country--title">{props.title}</h1>
                <h5 className="date--text">{props.startDate} - {props.endDate}</h5>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}











