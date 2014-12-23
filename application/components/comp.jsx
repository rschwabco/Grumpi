/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
		mui = require('material-ui'),
		RaisedButton = mui.RaisedButton;

var Comp = React.createClass({

	render: function() {
		return (
			<RaisedButton label="Default" />
		);
	}

});


//React.render(
//	<Comp />,
//	document.getElementById('mount-node')
//);
//
