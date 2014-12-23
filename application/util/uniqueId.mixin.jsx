/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


var UniqueIdMixin = {
  makeId: function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
};

module.exports = UniqueIdMixin;
