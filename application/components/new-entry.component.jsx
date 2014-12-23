/**
 * @jsx React.DOM
 */

'use strict';
var i = 0;


var React = require('react/addons');
require('styles/NewEntry.css');
var FlexGrid = require('components/FlexGrid');
var MultiInput = require('components/MultiInput');
var Input = require('react-bootstrap/Input');
var Button = require('react-bootstrap/Button');

var _ = require('lodash');


var componentTypes = {
  'Input': Input
};


var NewEntry = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    var model = this.props.model;
    var fields = model.fields;
    var schema = model.schema;

    var initialState = {
      '_model': model,
      '_fields': fields,
      '_schema': schema
    };

    //Replace with extend
    fields.map(function(field){
      initialState[field] = model[field];
    });


    return initialState;
  },

  updateChange: function(e){

    var model = this.state._model;
    var fieldList = this.state._fields;
    var schema = this.state._schema;
    var that = this;
    fieldList.map(function(field){
      model[field] = that.refs[field].refs.input.getDOMNode().value
    });


    this.setState({'_model': model})
  },
  saveEntry: function(){
    var self = this;

    var newInstance = {};
    var fieldList = this.state._fields;
    var model = this.state._model;

    _.each(this.state._fields, function(field){
      newInstance[field] = self.state._model[field];
    });

    newInstance.name = this.state._model.name;
    newInstance.singleName = this.state._model.singleName;
    // console.log(newInstance);

    //Calling save function
    this.props.save.apply(this, [newInstance]);

  },
  render: function () {
    var that = this;
    var fieldList = this.state._fields;
    var model = this.state._model;
    var schema = this.state._schema;


    var layoutOptions = {
      flexWrap: 'wrap',
      justify: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'strech',
      display: 'flex'
    };


    var fields = _.map(schema,function(field,key){
      var component = componentTypes[field.component];

      i++;
      return (
        <div className="inputWrapper">
            <Input id={i} label={key} ref={key} type="text" defaultValue={that.state[field]}  onChange={that.updateChange} />

        </div>
      )
    });
    return (
      <div>
        <FlexGrid layout={layoutOptions} direction="row">
          {fields}
        </FlexGrid>
        <Button bs-style="primary" onClick={this.saveEntry}>Save</Button>
      </div>
      );
  }
});

module.exports = NewEntry;
