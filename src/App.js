import React, {Component} from 'react';
import './scss/app.scss';
import Weather from './components/weather';
import Form from './components/form';

const Api_Key = "808747a91512758142d4594709504e44";


class App extends React.Component {

    state = {

        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined

    };

    //getWeather is a method we'll use to make the api call
    getWeather = async (e) => {

        // preventing the page from loading // from the form
        e.preventDefault();

        // Getting data from the form inputs
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
        const response = await api_call.json();

        // updating the initial stats of our app

        if (city && country) {
            this.setState({
                temperature: Math.ceil(response.main.temp - 273.15),
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: ""
            })

        } else {
            this.setState({
                error: "Please input search values..."
            })
        }
    };

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="weather--title">
                        <h1>Hello From Weather app</h1>
                        <p>just type the city and country to get your data</p>
                    </div>

                    <div className="">
                        <Form loadWeather={this.getWeather}/>
                        <Weather
                            temperature={this.state.temperature}
                            city={this.state.city}
                            country={this.state.country}
                            humidity={this.state.humidity}
                            description={this.state.description}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
