/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

/**
* Components
*/
var SelectBox = require('components/Select');
var MultiSelectBox = require('components/MultiSelect');

/**
* Styles
*/
require('styles/EditableSelect.css');

var EditableSelect = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return {
      editing: false,
      value: this.props.value,
      set: false
    }
  },


  toggleEdit: function(){
    var toggled = !this.state.editing;
    this.setState({editing: toggled});
  },
  handleChange: function(val){

    this.setState({
      set: true,
      editing: false,
      value: val
    });
  },
  render: function () {
    var styles = {
      color: 'blue'
    };

    var editable = (!this.state.editing) ? (
      <div style={styles} onClick={this.toggleEdit}>{this.state.value}</div>
    ) : (
      <div onClick={this.toggleEdit}>
        <SelectBox
          label={this.props.label}
          onChange={this.handleChange}
          value={this.linkedState('value')}
          options={this.props.options}
        ></SelectBox>

      </div>
    );

    return (
        <div>
          {editable}
        </div>
      );
  }
});

module.exports = EditableSelect;
