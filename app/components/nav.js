var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <div className="pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list">
        <li className="pure-menu-item"><NavLink  exact activeClassName='active' className="pure-menu-link" to='/'>Home</NavLink></li>
        <li className="pure-menu-item"><NavLink activeClassName='active' className="pure-menu-link" to='/about'>About</NavLink></li>
        <li className="pure-menu-item"><NavLink activeClassName='active' className="pure-menu-link" to=''> <span className="icon">
            <i className="fa fa-github"></i>
             </span></NavLink></li>
             <li className="pure-menu-item"><NavLink activeClassName='active' className="pure-menu-link" to=''> <span className="icon">
            <i className="fa fa-twitter"></i>
             </span></NavLink></li>
		    </ul>
		</div>
  )
}

module.exports = Nav;


  