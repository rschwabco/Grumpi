/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FunnelStep = require('components/FunnelStep');
var FlexGrid = require('components/FlexGrid');


/**
 * Mixins
 */
var EventEmitterMixin = require('mixins/EventEmitter');

/**
 * Styles
 */
require('styles/Funnel.css');


var Funnel = React.createClass({
    mixins: [EventEmitterMixin],

    propTypes: {
        steps: React.PropTypes.object,
        stepsOrder: React.PropTypes.array
    },
    getInitialState: function(){
        return {

        }
    },
    prepareData: function(data){

    },
    componentWillMount: function(){

    },

    componentDidMount: function(){

    },

    componentWillReceiveProps: function(nextProps){

    },
    render: function () {
        var steps =[];
        var self = this;
        var incoming = this.props.steps;
        //console.log(this.props.steps, this.props.stepsOrder);


        this.props.stepsOrder.forEach(function(stepEntry){
            if (typeof(self.props.steps) != "undefined"){
                //console.log(self.props.steps[stepEntry]);
                steps.push(<FunnelStep step={self.props.steps[stepEntry]} />);
            }

        });

        var layoutOptions = {
            flexWrap: 'wrap',
            justify: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'strech',
            display: 'flex'
        };


        return (
            <FlexGrid layout={layoutOptions}>
                {steps}
            </FlexGrid>
        );
    }
});

module.exports = Funnel;
