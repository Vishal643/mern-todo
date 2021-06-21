import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const SingleTodo = () => {
	const [todo, setTodo] = useState({});
	const { id } = useParams();

	const getSingleTodo = () => {
		axios.get(`/todo/${id}`).then((res) => setTodo(res.data));
	};

	useEffect(() => {
		getSingleTodo();
	}, [id]);

	const { title, status } = todo;

	return (
		<>
			<h1>{title}</h1>
			<h3>{`${status}`}</h3>
		</>
	);
};

export default SingleTodo;
