const express = require('express');
const Todo = require('../model/todo');

const router = express.Router();

router.put('/todo/:id', async (req, res) => {
	const data = req.body;

	try {
		const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, data, {
			new: true,
		});
		res.status(201).json(updatedTodo);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
