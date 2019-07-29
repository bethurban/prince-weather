import React, { Component } from 'react';
import WeatherCard from './WeatherCard.js';

class Weather extends Component {
  render() {
    return (
      <div>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    )
  }
}

export default Weather;
