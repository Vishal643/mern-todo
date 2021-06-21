const mongoose = require('mongoose');

const dbConnect = async () => {
	// try {
	const conn = await new mongoose.connect(
		'mongodb://localhost:27017/todo-mern',
		{
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true,
		},
	);
	
	return conn;
	// } catch (err) {
	// 	console.log('Something went wrong');
	// }
};

module.exports = dbConnect;
