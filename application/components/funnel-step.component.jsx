/**
 * @jsx React.DOM
 */


'use strict';

var React = require('react/addons');

/**
 * Mixins
 */
var EventEmitterMixin = require('mixins/EventEmitter');

/**
 * Styles
 */
require('styles/FunnelStep.css');



var FunnelStep = React.createClass({
    mixins: [EventEmitterMixin],
    propTypes: {
        step: React.PropTypes.object
    },
    getInitialState: function(){
        return {

        }
    },

    componentWillMount: function(){

    },

    componentDidMount: function(){


    },

    componentWillReceiveProps: function(nextProps){


    },
    render: function () {
        var stats = {};

        if (this.props.step.stats != null){
            stats =
                (<span className="funnelStepStats">
                    <div className="stepThrough arrowLeft">{parseInt(this.props.step.stats.throughRate * 100)}%</div>
                    <div className="stepDrop arrowDown">{parseInt(this.props.step.stats.dropRate  * 100)}%</div>
                    <div className="funnelDrop">{this.props.step.stats.dropValue}</div>
                </span>);
        }

        return (
            <div className="funnelStepWrapper">
                {stats}

                <span className="funnelStep">
                    <div className="displayName">Step</div>
                    <div className="value">{this.props.step.value}</div>
                </span>

            </div>
        );
    }
});

module.exports = FunnelStep;
