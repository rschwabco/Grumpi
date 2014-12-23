/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


var ReportEntry = React.createClass({

  componentWillMount: function() {

  },

  //Mixin
  getFinalValue: function(value,unitType){
    var finalValue = "";
    switch (unitType){
      case 'percentage':
        finalValue = parseInt(value * 100) + '%';
        break;
      case 'integer':
        finalValue = parseInt(value);
        break;
      case  'float':
        finalValue = parseFloat(value);
        break;
      default:
        finalValue = value;
        break;
    }

    return finalValue;

  },

  render: function () {
    var entry = this.props.entry;

    entry.finalValue = this.getFinalValue(entry.ratio, entry.unitType);
    // entry.timeframe = entry.timeseries[0].resolution;
    // entry.timeseries[0].entries.length
    console.log(entry);


    return (
        <div className={entry.sentiment + " reportEntry"}>
          <span className="part descriptor">Analysis for</span>
          <span className="part app">{entry.app}</span>
          <span className="part contextOperator"> on</span>
          <span className="part contextTarget">{entry.publisher}</span>
          <span className="part descriptor">indicates that</span>
          <span className={entry.sentiment + " part fact"}>{entry.fact}</span>
          <span className="part operator">{entry.operator}</span>
          <span className={entry.sentiment + " part ratio"}>{entry.finalValue}</span>
          <span className="part timeframe">in the last  {entry.resolution}. </span>
        </div>
      );
  }
});

module.exports = ReportEntry;
