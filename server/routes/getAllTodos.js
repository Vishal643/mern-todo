const express = require('express');
const Todo = require('../model/todo');

const router = express.Router();

router.get('/get-all-todos', async (req, res) => {
	try {
		const todos = await Todo.find({}).lean().exec();
		res.status(200).json(todos);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
