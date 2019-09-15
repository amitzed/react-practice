import React from 'react'
import ReactDOM from 'react-dom'


function Person(props) {
  return <h1>Hi {props.name}</h1>
}

  ReactDOM.render(
    <Person name='Amit'/>,
      document.getElementById('root')
  );
