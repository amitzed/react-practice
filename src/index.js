import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}
  }

  increment = (e) => {
    e.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return <button onClick={this.increment}><em>Click Me</em> <br/> The Current Value Is: {this.state.counter}</button>
  }
}

  ReactDOM.render(
    <Increment />,
      document.getElementById('root')
  );
