var React = require('react');
var {IndexLink, Link} = require('react-router');

  var Navigation = React.createClass({
    render: function(){
      return(
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                React Timer App
              </li>
              <li>
                <IndexLink to="/" activeClassName="active-link" >Timer</IndexLink>
              </li>
              <li>
                <Link to = "/countdown" activeClassName="active-link">Countdown</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit = {this.onSearch}>
              <ul className="menu">
                <li className="menu-text">
                  Created by <a href="#" target="_blank">Ion Darii</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      )
    }
  });

  module.exports = Navigation;
