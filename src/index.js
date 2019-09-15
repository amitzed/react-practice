import React from 'react'
import ReactDOM from 'react-dom'

let clock = () => {
  return
};

setInterval(function() {
  ReactDOM.render(
    <h2>
      {new Date().toLocaleTimeString()}
    </h2>,
      document.getElementById('root')
  );
});
