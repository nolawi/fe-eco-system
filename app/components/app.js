var React = require('react');
var Popular = require('./popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
Popular = require('./Popular');

class App extends React.Component {
  render() {
    return (
    	<Router>
	      <div className='container'>
	        <Route path='/' component={Popular} />
	        <Popular />
	      </div>
        </Router>
    )
  }
}

module.exports = App;