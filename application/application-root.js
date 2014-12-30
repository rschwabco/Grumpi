/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
	mui = require('material-ui'),
	MenuItem = mui.MenuItem,
	Toolbar = mui.Toolbar,
	Icon = mui.Icon,
	LeftNav = mui.LeftNav,
	ToolbarGroup = mui.ToolbarGroup,
	AppBar = mui.AppBar,
	AppCanvas = mui.AppCanvas,
DropDownMenu = mui.DropDownMenu;


var menuItems = [
	{ route: 'get-started', text: 'Get Started' },
	{ route: 'css-framework', text: 'CSS Framework' },
	{ route: 'components', text: 'Components' },
	{ type: MenuItem.Types.SUBHEADER, text: 'Resources' },
	{
		type: MenuItem.Types.LINK,
		payload: 'https://github.com/callemall/material-ui',
		text: 'GitHub'
	},
];




var Comp = React.createClass({
	getInitialState: function(){
		return {
			isDocked: false
		}
	},
	render: function() {
		var isDocked= false;
		return (
			<AppCanvas predefinedLayout={1} >

				<AppBar
					className="mui-dark-theme"
					title="Rethink - Hapi - React!"
					showMenuIconButton={true}
					onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
					zDepth={0}>
				</AppBar>

				<LeftNav ref="leftNav" docked={false} menuItems={menuItems} />

			</AppCanvas>

		)
	},

	_onMenuIconButtonTouchTap: function(){
		this.refs.leftNav.toggle();
	}

});

module.exports = Comp;

React.render(
	<Comp />,
	document.getElementById('mount-node')
);





