import './App.css';
import { Route } from 'react-router-dom';
import Todo from './components/Todo';
import SingleTodo from './components/SingleTodo';

function App() {
	return (
		<div className='App'>
			<Route exact path='/'>
				<Todo />
			</Route>

			<Route exact path='/todo/:id'>
				<SingleTodo />
			</Route>
		</div>
	);
}

export default App;
