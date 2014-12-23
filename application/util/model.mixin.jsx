/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var UniqueIdMixin = require('mixins/UniqueIdMixin');
var _dpd = require('mixins/DeploydMixin');

var _ = require('lodash');

var ModelMixin = {
    newModel: function(name,schema){
      return new Model(name,schema);
    }
};

var _schemas = {};
var _instances = {};

var Model = function(name,schema){
  var id = UniqueIdMixin.makeId();

  this.name = name;
  this.singleName = name.substring(0, name.length - 1);
  this.fields = _.keys(schema);
  this.schema = schema;

  if (_.isUndefined(_schemas[name])){
      _schemas[name] = schema;
  }

  if (_.isUndefined(_instances[name])){
    _dpd.list(name, function(data){
      _instances[name] = data
    });
  }

  else{
    if (_.isUndefined(_instances[name][id])){
      _instances[name][id] = schema;
    }
  }
};

Model.prototype.saveInstance = function(newInstance, cb){
  var modelName = newInstance.name;
  var singleName = newInstance.singleName;

  var entry = newInstance;
  _dpd.create(modelName,newInstance,function(res){
      _instances[modelName].push(res);
      cb(_instances[modelName]);
  });
}

Model.prototype.removeInstance = function(modelName, instanceId, cb){
  var modelName = newInstance.name;
  var singleName = newInstance.singleName;

  var entry = newInstance;
  _dpd.remove(modelName,instanceId,function(res){
      //TODO: Remove from _instances
      cb(_instances[modelName]);
  });
}


Model.prototype.getInstances = function(modelName, cb){
  var self = this;

  if (!_.isUndefined(_instances[self.name])){
    return _instances[self.name];
  }
  else{
    _dpd.list(modelName, function(instances){
      _.each(instances, function(instance){
        _instances[name] = instances;
        cb(_instances[self.name]);
      });
    });
  }
}

Model.prototype.getInstance = function(modelName,instanceId, cb){
  if (!_.isUndefined(_instances[this.name]) && !_.isUndefined(_instances[this.name][instanceId])){
      return _instances[this.name][instanceId];
  }
  else{
    return false
  }
}








module.exports = ModelMixin;
