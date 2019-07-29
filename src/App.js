import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './containers/Weather.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: [
        {
          "dt": 1519074000,
          "main": {
            "temp": 283.99,
            "temp_min": 281.801,
            "temp_max": 283.99,
            "pressure": 989.94,
            "sea_level": 1029.29,
            "grnd_level": 989.94,
            "humidity": 52,
            "temp_kf": 2.19
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "clouds": {
            "all": 20
          },
          "wind": {
            "speed": 3.36,
            "deg": 325.001
          },
          "rain": {

          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-02-19 21:00:00"
        },
        {
          "dt": 1519074000,
          "main": {
            "temp": 283.99,
            "temp_min": 281.801,
            "temp_max": 283.99,
            "pressure": 989.94,
            "sea_level": 1029.29,
            "grnd_level": 989.94,
            "humidity": 52,
            "temp_kf": 2.19
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "clouds": {
            "all": 20
          },
          "wind": {
            "speed": 3.36,
            "deg": 325.001
          },
          "rain": {

          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-02-19 21:00:00"
        }
      ]};
    }

  render() {
    return (
      <div className="App">
        <Weather weather={this.state.weather} />
      </div>
    );
  }

}

export default App;
