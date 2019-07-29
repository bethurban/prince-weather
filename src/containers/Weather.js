import React, { Component } from 'react';
import WeatherCard from './WeatherCard.js';

class Weather extends Component {

  render() {

    var weatherCards = this.props.weather.map(day => (
      <WeatherCard weather={day.weather} />
    ));

    return (
      <div>
        { weatherCards }
      </div>
    )
  }
}

export default Weather;
