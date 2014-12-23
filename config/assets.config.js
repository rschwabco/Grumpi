'use strict'

var Alias = require('require-alias');

global.alias = new Alias({
	aliases: {
		'@root': './',
		'@components': './application/components'
	}
});