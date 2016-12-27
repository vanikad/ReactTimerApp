var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function(){
    return(
      <div>
        <Clock totalSeconds = {13} />
      </div>
    )
  }
});

module.exports = Countdown;
