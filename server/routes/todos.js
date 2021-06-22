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

router.post('/post-todo', async (req, res) => {
	const data = req.body;

	try {
		const newTodo = await Todo.create(data);
		res.status(201).json(newTodo);
	} catch (err) {
		console.log(err);
	}
});

router.get('/todo/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findById(id).lean().exec();
		res.status(200).json(todo);
	} catch (err) {
		console.log(err);
	}
});

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

router.delete('/todo/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findByIdAndRemove(id).lean().exec();
		res.status(200).json({ todo, message: 'Todo Deleted Successfully' });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
