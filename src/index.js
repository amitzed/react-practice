import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentDisUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

    render() {
      return (
        <div>
          <h1>Hi Amit</h1>
          <h2>It's {this.state.date.toLocaleTimeString()}</h2>
        </div>
      )
    };
  }


  ReactDOM.render(
    <Clock />,
      document.getElementById('root')
  );
