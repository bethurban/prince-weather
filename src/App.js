import React, { Component } from 'react';
import './App.css';
import Weather from './containers/Weather.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: [],
      zip: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      zip: event.target.value,
      submitted: false
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const API_KEY = process.env.REACT_APP_APIKEY
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&units=I&days=5&postal_code=${this.state.zip}&country=US`)
      .then(response => response.json())
      .then(data => {
        // debugger
        this.setState({
         weather: data.data,
         submitted: true
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
          <button type="submit" class="button">Purple Rain?</button>
        </form>
        <Weather weather={this.state.weather} submitted={this.state.submitted} />
      </div>
    );
  }

}

export default App;
