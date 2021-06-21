import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowTodo from './ShowTodo';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState('');
	const [status, setStatus] = useState(false);
	const [id, setId] = useState();

	const [isEditing, setIsEditing] = useState(false);

	const handleTodo = async () => {
		const payload = {
			title,
			status,
		};
		try {
			await axios.post('/post-todo', payload);
			getTodo();
		} catch (err) {
			console.log(err);
		}
	};

	const getTodo = async () => {
		try {
			const todo = await axios.get('/get-all-todos');
			setTodos([todo.data]);
		} catch (err) {
			console.log(err);
		}
	};

	const handleEditTodo = async () => {
		const payload = {
			title,
			status,
		};
		try {
			await axios.put(`/todo/${id}`, payload);
			getTodo();
			setIsEditing(false);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getTodo();
	}, []);

	return (
		<>
			<h1>MERN Stack Todo App</h1>

			<div>
				<input
					type='text'
					placeholder='Enter your todo...'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				{!isEditing ? (
					<button onClick={handleTodo}>Add Todo</button>
				) : (
					<button onClick={handleEditTodo}>Updated Todo</button>
				)}

				{todos?.map((todo) =>
					todo.map((t) => (
						<ShowTodo
							key={t._id}
							{...t}
							setIsEditing={setIsEditing}
							setTitle={setTitle}
							setStatus={setStatus}
							setId={setId}
							getTodo={getTodo}
						/>
					)),
				)}
			</div>
		</>
	);
};

export default Todo;
