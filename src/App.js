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
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&units=I&days=5&postal_code=07040&country=US`)
      .then(response => response.json())
      .then(data => {
        console.log("Data:", data.data)
        this.setState({
         weather: data.data
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
