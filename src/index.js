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
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return(
      <div>
        <LiftState scaleName="Celsius" value={celsius} func={this.handleCelsius} />
        <LiftState scaleName="Fahrenheit" value={fahrenheit} func={this.handleFahrenheit} />
      </div>
    )
   }
}

function convert(temperature, convertFunction) {
  return convertFunction(temperature)
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9
}
function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32
}

class LiftState extends React.Component {
  render() {
    return(
      <fieldset>
        <legend>{this.props.scaleName} Scale</legend>
        <input value={this.props.value} onChange={this.props.func} />
      </fieldset>
    )
  }
}

  ReactDOM.render(
    <TemperatureScale />,
      document.getElementById('root')
  );
