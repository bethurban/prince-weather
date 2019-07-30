import React, { Component } from 'react';
import './App.css';
import Weather from './containers/Weather.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: [],
      zip: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({zip: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const API_KEY = process.env.REACT_APP_APIKEY
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&units=I&days=5&postal_code=${this.state.zip}&country=US`)
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
        <form onSubmit={this.handleSubmit}>
          <label>Zip code: </label>
          <input type="text" value={this.state.zip} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Purple Rain?" />
        </form>
        <Weather weather={this.state.weather} />
      </div>
    );
  }

}

export default App;
