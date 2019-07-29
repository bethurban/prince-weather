import React, { Component } from 'react';
import WeatherCard from './WeatherCard.js';

class Weather extends Component {

  render() {

    var weatherCards = this.props.weather.map(day => (
      <WeatherCard day={day.dt_txt} weather={day.weather[0]} />
    ));

    return (
      <div>
        { weatherCards }
      </div>
    )
  }
}

export default Weather;
