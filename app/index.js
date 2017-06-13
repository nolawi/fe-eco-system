let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

let App = require('./components/app');



ReactDOM.render(
  <App />,
  document.getElementById('app')
);