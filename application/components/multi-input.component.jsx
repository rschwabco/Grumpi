/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/MultiInput.css');

var components = {
  'Input': require('react-bootstrap/Input')
};

var MultiInput = React.createClass({
  getDefaultProps: function(){
    return{
      component: React.DOM.div
    }
  },
  componentWillMount: function(){},
  componentDidMount: function(){
    // var node = this.getDOMNode();
    // React.renderComponent(Input({}), node)
  },
  render: function () {
    var root = this.props.component;
    var schema = this.props.data;
    var component = components[schema.component];
    return this.transferPropsTo(
        <component type={schema.type} />      
    )
  }
});

module.exports = MultiInput;

//
// var topComponent = React.createClass({
//   render: function () {
//     var components = this.props.schema.map(function (componentName) {
//       return require(componentName);
//     });
//
//     return <div>
//       {components.map(function (comp) {
//         return <comp />
//       })}
//     </div>
//   }
// })
//
// React.renderComponent(<topComponent/>, document.body)
