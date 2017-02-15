import React from "react";
import DisplayWeather from "./weather";

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.cities = ['london', 'paris', 'oslo', 'berlin', 'dublin', 'chandigarh', 'mumbai', 'surat', 'jaipur', 'new delhi', 'frankfurt'];
        //set Initial state
        this.state = {};

        this.cities.forEach((city) => {
            this.state[`${city}WeatherData`] =  undefined;
            this.fetchAsync(`api/weather/${city}`, `${city}WeatherData`);
        });
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
        return (
            <div>
                {
                    this.cities.map((city, idx)=> {
                        return (
                            <div key={idx} className="col-6 col-sm-4">
                                <DisplayWeather weatherData={this.state[`${city}WeatherData`]}/>
                            </div>)
                    })
                }
            </div>);
    }
}