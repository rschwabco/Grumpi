/**
 * @jsx React.DOM
 */

 /*
  <RemoteTableHeader
    cols="<[{value:'foo'}]>"

    >
  </RemoteTableHeader>
 */



'use strict';

var React = require('react/addons');
require('../../styles/RemoteTableHeader.css');

var RemoteTableHeader = React.createClass({

  getInitialState: function() {
    return {
      filterBy: this.props.filterBy
    };
  },
  clickHandler: function(e){
    var ref = this.refs[e.target.id];

  },
  hoverHandler: function(e){
    var ref = this.refs[e.target.id];

  },

  render: function () {
    var cols = this.props.cols;

    var items = _.map(cols, function(col) {
      return (
        <span
          id={col.value}
          className="headerCell"
          onClick={self.clickHandler}
          onMouseOver={self.hoverHandler}
        >
          {col.value}
        </span>
      );


    }).bind(this);


    return (
        <div>
          <p>Content for RemoteTableHeader</p>
        </div>
      );
  }
});

module.exports = RemoteTableHeader;
