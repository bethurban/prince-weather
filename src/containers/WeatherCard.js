import React, { Component } from 'react';

class WeatherCard extends Component {

  render() {

    return (
      <div>
        <h2>{this.props.day}</h2>
        <h3>{this.props.weather.main}</h3>
        <p>{this.props.weather.description}</p>
      </div>

    )
  }
}

export default WeatherCard;
