import { Route } from 'react-router-dom';
import Todo from '../components/Todo';
import SingleTodo from '../components/SingleTodo';
import HomePage from '../components/HomePage';

const Routes = () => {
	return (
		<>
			<Route component={HomePage} exact path='/' />

			<Route path='/get-all-todos'>
				<Todo />
			</Route>

			<Route exact path='/todo/:id'>
				<SingleTodo />
			</Route>
		</>
	);
};

export default Routes;
