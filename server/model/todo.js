const mongoose = require('mongoose');

const Todo = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		status: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true, versionKey: false },
);

module.exports = mongoose.model('Todo', Todo);
