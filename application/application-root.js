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

var Router = require('react-router'),
 		DefaultRoute = Router.DefaultRoute,
 		Link = Router.Link,
 		Route = Router.Route,
 		RouteHandler = Router.RouteHandler;

var Dashboard = require('./components/step.jsx');

var injectTapEventPlugin = require("react-tap-event-plugin");



var menuItems = [
	{ route: 'components', text: 'Components' },
	{ type: MenuItem.Types.SUBHEADER, text: 'Resources' }
];


var App = React.createClass({
	getInitialState: function(){
		return {
			isDocked: false
		}
	},
	_onMenuIconButtonTouchTap: function(){
			this.refs.leftNav.toggle();
	},
  render: function () {
		injectTapEventPlugin();
		var appStyle = {
			position: 'fixed',
			top: '65px',
			padding: '5px'
		};
    return (
			<AppCanvas predefinedLayout={1}>

				<AppBar
					className="mui-dark-theme"
					title="Scholar"
					showMenuIconButton={true}
					onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
					zDepth={0}>
				</AppBar>
				<LeftNav ref="leftNav" docked={false} menuItems={menuItems}/>
				<div className='app-view' style={appStyle}>
					<RouteHandler/>
				</div>

			</AppCanvas>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

// var Root = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			isDocked: false
// 		}
// 	},
// 	render: function() {
// 		var isDocked= false;
// 		return (
// 			<AppCanvas predefinedLayout={1}>
//
// 				<AppBar
// 					className="mui-dark-theme"
// 					title="Scholar"
// 					showMenuIconButton={true}
// 					onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
// 					zDepth={0}>
// 				</AppBar>
// 				<LeftNav ref="leftNav" docked={false} menuItems={menuItems}/>
//
// 			</AppCanvas>
//
// 		)
// 	},
//
// 	_onMenuIconButtonTouchTap: function(){
// 		this.refs.leftNav.toggle();
// 	}
//
// });
//
// module.exports = Root;
//
// React.render(
// 	<Root />,
// 	document.getElementById('mount-node')
// );
