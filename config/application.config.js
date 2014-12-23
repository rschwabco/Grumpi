'use strict'


module.exports = {
	'dev': {
		port: 3000,
		entries: ['./application/application-root.js'],
		targetFile: 'index.js',
		targetFolder: 'public/dist/'
	},
	'prod': {
		port: 3000,
		entries: ['./application/application-root.js'],
		targetFile: 'index.js',
		targetFolder: 'public/dist/'
	}
}