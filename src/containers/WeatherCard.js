import React, { Component } from 'react';

class WeatherCard extends Component {
  render() {
    var daysWeather = this.props.weather.map(weather => (
      weather.main
    ))

    return (
      <div>
        { daysWeather }
      </div>
    )
  }
}

export default WeatherCard;
