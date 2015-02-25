/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
		mui = require('material-ui'),
		RaisedButton = mui.RaisedButton,
    TextField = mui.TextField;

var Comp = React.createClass({

	render: function() {
		return (
      <div>
        <TextField
          hintText="Step Name"
          floatingLabelText="Example Text"
        ></TextField>
  			<RaisedButton label="Default" />
      </div>
		);
	}

});

module.exports = Comp;
//React.render(
//	<Comp />,
//	document.getElementById('mount-node')
//);
//
