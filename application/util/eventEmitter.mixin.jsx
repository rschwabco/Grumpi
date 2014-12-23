/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var EventEmitter = require('wolfy87-eventemitter');
var emitter = new EventEmitter();
var _  = require('lodash');

var components = {};


var EventEmitterMixin = {
  addListener: function(rootComponentName, eventName, listenerFunction){
    components[rootComponentName] = new EventEmitter();
    components[rootComponentName].on(eventName,listenerFunction);

  },
  removeListener: function(name){
    var emitter = components[rootComponentName];
    emitter.off(name);
  },

  //Payload should be an array
  emit: function(rootComponentName, eventToFire, payload, succss){
    var emitter = components[rootComponentName];
    emitter.emit(eventToFire, payload);
  }
}


module.exports = EventEmitterMixin;
