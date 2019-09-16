import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

class TemperatureScale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scale: 'c', temperature: 0}
  }
  handleCelsius = (e) => {
    this.setState({scale: 'c', temperature: e.target.value})
  };
  handleFahrenheit = (e) => {
    this.setState({scale: 'f', temperature: e.target.value})
  };
  render() {
    const temperature = this.state.temperature
    const scale = this.state.scale
    const celsius = scale === 'f' ? (temperature - 32) * 5/9 : temperature;
    const fahrenheit = scale === 'c' ? (temperature * 9/5) + 32 : temperature;
    return(
      <div>
        <fieldset>
          <legend>Celsius Scale</legend>
          <input value={celsius} onChange={this.handleCelsius} />
        </fieldset>

        <fieldset>
          <legend>Fahrenheit Scale</legend>
          <input value={fahrenheit} onChange={this.handleFahrenheit} />
        </fieldset>
      </div>
    )
   }
}

  ReactDOM.render(
    <TemperatureScale />,
      document.getElementById('root')
  );
