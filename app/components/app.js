var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./nav');


var Popular = require('./popular');
var About = require('./about');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />

          <Switch>
         

            <Route path='/' component={Popular} />
             <Route path='/about' component={About} />

            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
          
        </div>
      </Router>
    )
  }
}

module.exports = App;