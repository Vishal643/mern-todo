import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ShowTodo = (props) => {
	const {
		_id,
		title,
		status,
		setIsEditing,
		setStatus,
		setTitle,
		setId,
		getTodo,
	} = props;

	const handleEdit = (id, s, t) => {
		setIsEditing((isEditing) => !isEditing);

		setTitle(t);
		setId(id);
	};
	const handleDelete = (id) => {
		axios.delete(`/todo/${id}`).then((res) => getTodo());
	};

	const handleToggle = (id) => {
		const payload = {
			status: !status,
		};
		axios.put(`/todo/${id}`, payload).then((res) => getTodo());
	};
	return (
		<>
			<div>
				<Link to={`/todo/${_id}`}>
					<h2>{title}</h2>
				</Link>

				<span onClick={() => handleToggle(_id)}>{`${status}`}</span>

				<button onClick={() => handleEdit(_id, status, title)}>
					Edit Todo
				</button>
				<button onClick={() => handleDelete(_id)}>Delete Todo</button>
			</div>
		</>
	);
};

export default ShowTodo;
