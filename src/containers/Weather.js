import React, { Component } from 'react';
import WeatherCard from './WeatherCard.js';
import './Weather.css';

class Weather extends Component {

  render() {

    var weatherCards = this.props.weather.map(day => (
      <div class="column">
        <WeatherCard day={day.dt_txt} weather={day.weather[0]} />
      </div>
    ));

    return (
      <div class="row">
        { weatherCards }
      </div>
    )
  }
}

export default Weather;
