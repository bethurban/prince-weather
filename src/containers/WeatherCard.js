import React, { Component } from 'react';
import Clear from '../images/clear.jpg';
import Clear2 from '../images/clear2.jpg';
import Clouds from '../images/clouds.jpg';
import Clouds2 from '../images/clouds2.jpg';
import Rain from '../images/rain.jpeg';
import Snow from '../images/snow.jpg';
import Storm from '../images/storm.jpg';
import './WeatherCard.css';

class WeatherCard extends Component {

  render() {

    var image;

    var setImage;

    const clear = [Clear, Clear2];

    const clouds = [Clouds, Clouds2];

    const randomImage = (imgArr) => {
      let random
      if (this.props.submitted) {
        random = imgArr[Math.floor(Math.random()*imgArr.length)];
        setImage = random;
      } else {
        random = setImage;
      }
      return random;
    };

    var randomClear = clear[Math.floor(Math.random()*clear.length)];

    var randomClouds = clouds[Math.floor(Math.random()*clouds.length)];

    const date = () => {
      var day = new Date(this.props.day.replace(/-/g, '\/'));
      return day.toString().split(" ").slice(0,4).join(" ")
    }

    if (parseInt(this.props.weather.code) === 800) {
      image = <img src={randomImage(clear)} alt="Prince"></img>
    } else if (parseInt(this.props.weather.code) >= 801 && parseInt(this.props.weather.code) <= 804) {
      image = <img src={randomImage(clouds)} alt="Prince"></img>
    } else if (parseInt(this.props.weather.code) >= 600 && parseInt(this.props.weather.code) <= 622) {
      image = <img src={Snow} alt="Prince"></img>
    } else if (parseInt(this.props.weather.code) >= 300 && parseInt(this.props.weather.code) <= 321) {
      image = <img src={Rain} alt="Prince"></img>
    } else if (parseInt(this.props.weather.code) >= 500 && parseInt(this.props.weather.code) <= 531) {
      image = <img src={Rain} alt="Prince"></img>
    } else if (parseInt(this.props.weather.code) >= 200 && parseInt(this.props.weather.code) <= 232) {
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
          <h2>{this.props.weather.description}</h2>
          <h2>High: {this.props.max}&#176; F</h2>
          <h2>Low: {this.props.min}&#176; F</h2>
        </div>
      </div>
    )
  }
}

export default WeatherCard;
