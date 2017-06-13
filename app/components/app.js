let React = require('react');
let Popularity = require('./popular')


class App extends React.Component {
  render() {
    return (
      <div>
      	<Popularity />
      </div>
    )
  }
}

module.exports = App;