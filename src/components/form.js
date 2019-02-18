import React from "react";
import '../scss/form.scss'
const SForm = (props) => {
    return (
        <form className="weather--form" onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
    )
}
export default SForm;
