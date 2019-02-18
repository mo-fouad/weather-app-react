import React from "react";
import '../scss/weather.scss'

const SWeather = (props) => {
    return(
        <div className="weather--data">
            {props.country && props.city && <div>Location: <span> {props.city}, {props.country}</span></div>}
            {props.temperature && <div>Temperature: <span>{props.temperature}</span> </div>}
            {props.humidity && <div>Humidity: <span>{props.humidity}</span></div>}
            {props.description && <div>Conditions: <span> {props.description}</span> </div>}
            {props.error && <div>{props.error}</div>}
        </div>
    )
};

export default SWeather;
