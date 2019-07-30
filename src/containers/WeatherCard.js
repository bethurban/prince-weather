import React, { Component } from 'react';
import Clear from '../images/clear.jpg';
import Clouds from '../images/clouds.jpg';
import Rain from '../images/rain.jpeg';
import Snow from '../images/snow.jpg';
import Storm from '../images/storm.jpg';
import './WeatherCard.css';

class WeatherCard extends Component {

  render() {

    var image

    const date = () => {
      var day = new Date(this.props.day).toString().split(" ")
      return day.slice(0,4).join(" ")
    }

    if (this.props.weather.id === 800) {
      image = <img src={Clear} alt="Prince"></img>
    } else if (this.props.weather.id >= 801 && this.props.weather.id <= 804) {
      image = <img src={Clouds} alt="Prince"></img>
    } else if (this.props.weather.id >= 600 && this.props.weather.id <= 622) {
      image = <img src={Snow} alt="Prince"></img>
    } else if (this.props.weather.id >= 300 && this.props.weather.id <= 321) {
      image = <img src={Rain} alt="Prince"></img>
    } else if (this.props.weather.id >= 500 && this.props.weather.id <= 531) {
      image = <img src={Rain} alt="Prince"></img>
    } else if (this.props.weather.id >= 200 && this.props.weather.id <= 232) {
      image = <img src={Storm} alt="Prince"></img>
    }

    return (
      <div>
        <div class="date">
          <h2>{date()}</h2>
        </div>
        <div class="card">
          {image}
        </div>
        <div class="details">
          <h2>{this.props.weather.main}</h2>
          <h3>{this.props.weather.description}</h3>
        </div>
      </div>

    )
  }
}

export default WeatherCard;
