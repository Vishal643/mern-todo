const express = require('express');
const Todo = require('../model/todo');

const router = express.Router();

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
