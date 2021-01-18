import React from 'react';
import ReactDOM from 'react-dom'

const test = React.createElement(
  'h1',
  'null',
  'Hello, React!'
);
ReactDOM.render(test, document.querySelector('#root'));
