/**
 * @jsx React.DOM
 */


/*
    var chartTypes = [
      {value: 'bar', label: 'Bar'},
      {value: 'line', label: 'Line'},
      {value:'area', label:'Area'},
      {value:'area-spline', label:'Area Spline'},
      {value:'pie', label:'Pie'},
      {value:'donut', label:'Donut'},
      {value:'gauge', label:'Gauge'}
    ];
*/

'use strict';


var React = require('react/addons');

/**
* Mixins
*/
// var c3 = require('mixins/c3');
// var d3 = require('d3');
var EventEmitterMixin = require('mixins/EventEmitter');

/**
* Styles
*/
require('styles/Chart.css');
require('styles/c3.css');


var Chart = React.createClass({
  mixins: [EventEmitterMixin],
  getInitialState: function(){
    return {
      chart: {},
      isHovered: false,
      highlightedData: this.props.highlightedData,
      axis: this.props.axis
    }
  },
  prepareData: function(data){
      var self = this;
      var columns = [];
      var keys = _.keys(data[0]);



      _.map(keys,function(key){
          var column = [];
          column.push(key);
          columns.push(column);
      });

      _.map(data, function(entry){
            _.map(keys, function(key,val){
              columns[val].push(entry[key]);
            });
      });


      return columns;
  },
  componentWillMount: function(){

  },

  componentDidMount: function(){

    var chartInstance = c3.generate({
      bindto: '#' + this.props.chartId,
      data: {
        columns: this.prepareData(this.props.data),
        type: this.props.type,
        x: this.props.axis
      },
      FlexGrid: this.props.FlexGrid
    });


    this.setState({
      chart: chartInstance
    })
  },

  componentWillReceiveProps: function(nextProps){
    this.state.chart.load({
      columns: this.prepareData(nextProps.data),
      type: nextProps.type
    });

    this.setState({
      highlightedData: nextProps.highlightedData
    });

    if (!_.isUndefined(nextProps.highlightedData)){
      //var coordsArr = nextProps.highlightedData.id.split("_");
      //var locationX = parseInt(coordsArr[0]);
      //var locationY = parseInt(coordsArr[1]);
      //
      //var d = {x: locationX, y: locationY, value: 200, id: "clicks", index: locationX, name: "clicks"} ;
      //this.state.chart.externalSelect(d)
    }

  },
  render: function () {
    var highlighted = this.state.highlightedData;
    // console.log(highlighted.cell);
    // if (!_.isUndefined(highlighted.cell)){
    //   console.log(highlighted.cell.getDOMNode().innerHTML);
    // }
    return (
        <div>
          <div id={this.props.chartId}></div>
        </div>
    );
  }
});

module.exports = Chart;
