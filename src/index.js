import React from 'react'
import ReactDOM from 'react-dom'


function Person(props) {
  return <h1>Hi {props.name} is with the {props.group}</h1>
}

function Group() {
  return <div>
    <Person name='Amit' group='Frontend Devs' />
    <Person name='Christina' group='Backend Devs' />
  </div>
}

// class Person extends React.Component {
//   render() {
//     return <h1>Hi {this.props.name}</h1>
//   }
// }



  ReactDOM.render(
    <Group />,
      document.getElementById('root')
  );
