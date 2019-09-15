import React from 'react'
import ReactDOM from 'react-dom'


// function Person(props) {
//   return <h1>Hi {props.name}</h1>
// }

class Person extends React.Component {
  render() {
    return <h1>Hi {this.props.name}</h1>
  }
}

  ReactDOM.render(
    <Person name='Amit'/>,
      document.getElementById('root')
  );
