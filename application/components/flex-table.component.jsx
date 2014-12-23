/**
 * @jsx React.DOM
 */

 /*
	<FlexTable
		data="<Array>" 
		cols="<Array>"
		header="<Array>"
		hoverRow="<EventHandler>"
		hoverCol="<EventHandler>"
		hoverCell="<EventHandler>"
		clickRow="<EventHandler>"
		clickCell="<EventHandler>"
		>
	</FlexTable>
 */

'use strict';

var React = require('react/addons');
require('../../styles/FlexTable.css');

var FlexTable = React.createClass({
	getInitialState: function() {
		return {
			rows: this.props.rows,
			cols: this.props.cols,
			header: this.props.header
		};
	},
	render: function () {
	return (
	    <div/>
	  );
	}
});

module.exports = FlexTable;
