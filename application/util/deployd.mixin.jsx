/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var server = 'http://localhost:3000/';



var DeploydMixin = {
  //model: function(model){
  //  return Dpd(model);
  //},
  //list: function(model,cb){
  //  $.get(server + model,cb);
  //},
  //create: function(model,obj,cb){
  //  $.post(server + model,obj,cb);
  //},
  //get: function(model,id,cb){
  //  $.get(server + model + '/' + id,cb);
  //},
  //update: function(model,id,obj,cb){
  //  $.put(server + model + '/' + id, obj ,cb);
  //},
  //remove: function(model,id,cb){
  //  $.ajax({
  //    url: server + model + '/' +id,
  //    type: 'DELETE',
  //    success: function(result) {
  //        cb(data);
  //    }
  //  });
  //}
}


module.exports = DeploydMixin;
