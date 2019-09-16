import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

function Greeting(props) {
  if(props.value) {
    return <h1>This is ONE greeting</h1>
  }
    return <h1>This is the OTHER greeting</h1>
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: true}
  }
  handleClick = () => {
    this.setState({
      value: !this.state.value
    });
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Change Greeting</button>
        <Greeting value={this.state.value} />
      </div>
    )
  }
}

  ReactDOM.render(
    <Button />,
      document.getElementById('root')
  );
