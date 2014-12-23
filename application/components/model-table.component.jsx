/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');

/**
* Mixins
*/
var EventEmitterMixin = require('mixins/EventEmitter');
var UniqueIdMixin = require('mixins/UniqueIdMixin');

/**
* Styles
*/
require('styles/ModelTable.css');


var ModelTable = React.createClass({
  mixins: [EventEmitterMixin, UniqueIdMixin],
  getInitialState: function(){
    return{

    }
  },
  propTypes: {
    rows: React.PropTypes.array
  },
  componentWillMount: function(){
    var self = this;
  },
  componentWillReceiveProps: function(nextProps){

  },
  doHover: function(e){

  },

  getColumns: function(row){
    return _.keys(row);
  },
  render: function () {
    var self = this;

    var headerColumns = self.getColumns(this.props.rows[0]);
    var headerRow = _.map(headerColumns, function(col){
      return (
        <th>{col}</th>
      )
    });

    var rowIndex = 0;
    var entries = _.map(self.props.rows, function(row){

      var columnIndex = 0;
      var columns = _.map(headerColumns, function(col){
          var value = row[col].value;
          var k = rowIndex + "_" + columnIndex;

          columnIndex++;

          return (
            <td id={k} key={k} ref={k} onMouseOver={self.doHover}>{value}</td>
          )
      });

      var colId = self.makeId() + "_" + columnIndex;
      rowIndex++;

      return (
        <tr key={colId}>
          {columns}
        </tr>
      );
    });

    return (
        <div>
          <Table striped bordered condensed hover>
            <thead>
              {headerRow}
            </thead>
            <tbody>
              {entries}
            </tbody>
          </Table>
        </div>
      );

  }
});

module.exports = ModelTable;
