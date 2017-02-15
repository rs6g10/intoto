import React from "react";
import DisplayWeather from "./weather";

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.cities = ['london', 'paris', 'oslo'];
        //set initialState
        this.state = {
            londonWeatherData: undefined,
            parisWeatherData: undefined,
            osloWeatherData: undefined,
        };

        this.cities.forEach((city) => {
            this.fetchAsync(`api/weather/${city}`,`${city}WeatherData`);
        });
        // this.fetchAsync('api/weather/london', 'londonWeatherData');
        // this.fetchAsync('api/weather/paris', 'parisWeatherData');
        // this.fetchAsync('api/weather/oslo', 'osloWeatherData');
    }

    async fetchAsync(url, propName) {
        const response = await(fetch(url));
        if (response.status >= 300) {
            throw new Error('invalid response');
        } else {
            const responseJson = await response.json();
            this.setState({[propName]: responseJson});
            return responseJson;
        }
    }

    render() {
            debugger;
        // const londonWeatherDataMessage = this.state.londonWeatherData;
        // const parisWeatherDataMessage = this.state.parisWeatherData;
        // const osloWeatherDataMessage = this.state.osloWeatherData;osloWeatherData
        return (
        <div>
            {
                this.cities.map((city,idx)=> {
                    <div key={idx} className="col-6 col-sm-4">
                        {this.state[`${city}WeatherData`]
                            ? <DisplayWeather weatherData={this.state[`${city}WeatherData`]}/> :
                            <h1>Loading...</h1>}</div>
            })
            }
        </div>);
    }
}