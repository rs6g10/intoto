import React from 'react';

const Hello = () => {
    // const someData = fetch('/api/weather/london')
    //     .then((resp) => {
    //         return resp.json()
    // }).then((json) => {
    //     debugger;
    //     return json;
    //     });
    let londonWeatherData = undefined;
    (async() => {
        const weatherApi = await fetch('api/weather/london');
        londonWeatherData = await weatherApi.json();
    })();
    debugger;
    return (
        <div><h1>{londonWeatherData ? londonWeatherData.message : 'Gaurav'}</h1></div>
    );
};

export default Hello;
