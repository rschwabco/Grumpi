/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var server = '/';

var RethinkMixin = {
    getTotals: function(cb){
        $.get(server + 'totals/byDevice',cb);
    },

    getByGroup: function(group, cb){
        $.get(server + 'groupBy/' + group ,cb);
    },

    getGroupedByDevice: function(filter, group, cb){
        $.post(server + 'filter/device',
            {
                'filter' : filter,
                'group': group
            }
            , cb);
    },

    getGroupedByCountry: function(filter, group, cb){
        $.post(server + 'filter/country',
            {
                'filter' : filter,
                'group': group
            }
            , cb);
    }

}


module.exports = RethinkMixin;
