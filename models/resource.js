'use strict';

// Module dependencies.

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Schema for Ressources

var ResourceSchema = new Schema({
	name: {
		type: String,
		trim: true,
		default: '',
		required: true
	},
	category: {
		type: String,
		trim: true,
		default: '',
		required: true
	},
	address: {
		type: String,
		trim: true,
		default: '',
		required: true
	},
	city: {
		type: String,
		trim: true,
		default: '',
		required: true
	},
	state: {
		type: String,
		trim: true,
		default: '',
		required: true
	},	
	zip: {
		type: String,
		trim: true,
		default: '',
		required: true
	},
	phone: {
		type: String,
		trim: true,
		default: '',
		required: true
	},
	phoneAlt: {
		type: String,
		trim: true,
		default: '',
		required: false
	},
	url: {
		type: String,
		trim: true,
		default: '',
		required: false
	}
});

module.exports = mongoose.model('Resource', ResourceSchema);

	