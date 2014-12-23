/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
	mui = require('material-ui'),
	MenuItem = mui.MenuItem,
	DropDownMenu = mui.DropDownMenu;


var menuItems = [
	{ payload: '1', text: 'Never' },
	{ payload: '2', text: 'Every Night' },
	{ payload: '3', text: 'Weeknights' },
	{ payload: '4', text: 'Weekends' },
	{ payload: '5', text: 'Weekly' },
];

<DropDownMenu menuItems={menuItems} />

var Comp = React.createClass({

	render: function() {
		return (
			<DropDownMenu menuItems={menuItems} />
		);
	}

});

module.exports = Comp;


React.render(
	<Comp />,
	document.getElementById('mount-node')
);





