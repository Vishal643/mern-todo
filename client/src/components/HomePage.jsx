import { Link } from 'react-router-dom';
const HomePage = () => {
	return (
		<>
			<nav>
				<Link to='/get-all-todos'>Todos</Link>
				<Link to='/login'>Login</Link>
				<Link to='/register'>Register</Link>
			</nav>
		</>
	);
};

export default HomePage;
