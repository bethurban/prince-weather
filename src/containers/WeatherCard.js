import React, { Component } from 'react';
import Clear from '../images/clear.jpg';
import Clouds from '../images/clouds.jpg';
import Rain from '../images/rain.jpeg';
import Snow from '../images/snow.jpg';
import Storm from '../images/storm.jpg';

class WeatherCard extends Component {

  render() {

      var image

      if (this.props.weather.id === 800) {
        image = <img src={Clear} alt="Prince" height="200" width="200"></img>
      } else if (this.props.weather.id >= 801 && this.props.weather.id <= 804) {
        image = <img src={Clouds} alt="Prince" height="200" width="200"></img>
      } else if (this.props.weather.id >= 600 && this.props.weather.id <= 622) {
        image = <img src={Snow} alt="Prince" height="200" width="200"></img>
      } else if (this.props.weather.id >= 300 && this.props.weather.id <= 321) {
        image = <img src={Rain} alt="Prince" height="200" width="200"></img>
      } else if (this.props.weather.id >= 500 && this.props.weather.id <= 531) {
        image = <img src={Rain} alt="Prince" height="200" width="200"></img>
      } else if (this.props.weather.id >= 200 && this.props.weather.id <= 232) {
        image = <img src={Storm} alt="Prince" height="200" width="200"></img>
      }


    return (
      <div>
        <h2>{this.props.day}</h2>
        {image}
        <h3>{this.props.weather.main}</h3>
        <p>{this.props.weather.description}</p>
      </div>

    )
  }
}

export default WeatherCard;
