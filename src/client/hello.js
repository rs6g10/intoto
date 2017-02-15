import React from "react";
import DisplayWeather from "./weather";

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        //set initialState
        this.state = {
            londonWeatherData: undefined
        };
        this.fetchAsync('api/weather/london');
    }

    async fetchAsync(url) {
        const response = await(fetch(url));
        if (response.status >= 300) {
            throw new Error('invalid response');
        } else {
            const responseJson = await response.json();
            this.setState({londonWeatherData: responseJson});
            return responseJson;
        }
    }

    render() {
        const londonWeatherDataMessage = this.state.londonWeatherData;
        return (
            <div>
                <div>
                    {londonWeatherDataMessage
                        ? <DisplayWeather weatherData={londonWeatherDataMessage}/> :
                        <h1>Loading...</h1>}</div>
            </div>
        );
    }
}