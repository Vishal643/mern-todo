const express = require('express');
const Todo = require('../model/todo');

const router = express.Router();

router.post('/post-todo', async (req, res) => {
	const data = req.body;

	try {
		const newTodo = await Todo.create(data);
		res.status(201).json(newTodo);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
