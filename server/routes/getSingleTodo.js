const express = require('express');
const Todo = require('../model/todo');

const router = express.Router();

router.get('/todo/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findById(id).lean().exec();
		res.status(200).json(todo);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
