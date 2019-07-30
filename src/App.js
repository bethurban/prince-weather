import React, { Component } from 'react';
import './App.css';
import Weather from './containers/Weather.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: []
    };
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_APIKEY
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=07040,us&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log("Data:", data.list)
        this.setState({
         weather: data.list.slice(0,5)
       })
     })
  }

  render() {
    return (
      <div className="App">
        <h1>Prince Predicts the Weather</h1>
        <Weather weather={this.state.weather} />
      </div>
    );
  }

}

export default App;
