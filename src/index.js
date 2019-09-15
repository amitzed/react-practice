import React from 'react'
import ReactDOM from 'react-dom'

let clock = () => {
  return <h2>
    {new Date().toLocaleTimeString()}
  </h2>
};

ReactDOM.render(
  clock(),
    document.getElementById('root')
);
