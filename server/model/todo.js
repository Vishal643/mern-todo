const mongoose = require('mongoose');

const Todo = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		status: {
			type: Boolean,
			default: false,
		},
		subTodos: [
			{
				title: {
					type: String,
					required: true,
				},
				description: {
					type: String,
					required: true,
				},
				status: {
					type: Boolean,
					default: false,
				},

				allSubtodos: [],
				inProgressTodo: [],
				completedTodo: [],
			},
		],
	},
	{ timestamps: true, versionKey: false },
);

module.exports = mongoose.model('Todo', Todo);
