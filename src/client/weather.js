import React from 'react';

const DisplayWeather = (props) => {
    const {weatherData} = props;
    if(!weatherData) {
        return (<h1>Loading...</h1>);
    }

    const firstDataSet = weatherData.list[0];

    return (
        <div>
            <h1>City: {weatherData.city.name}</h1>
            <h2>Date : {firstDataSet.dt_txt}</h2>
            <h3>Min temperature : {firstDataSet.main.temp_min}</h3>
            <h3>Max temperature : {firstDataSet.main.temp_max}</h3>
        </div>
    )
};

export default DisplayWeather;