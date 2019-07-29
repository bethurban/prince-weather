import React, { Component } from 'react';

class WeatherCard extends Component {
  render() {
    var daysWeather = this.props.weather.map(weather => (
      <h3>{weather.description}</h3>
    ))

    return (
      <div>
        { daysWeather }
      </div>
    )
  }
}

export default WeatherCard;
