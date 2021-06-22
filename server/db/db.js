const mongoose = require('mongoose');

const dbConnect = async () => {
	const conn = await new mongoose.connect(process.env.MONGO_CLOUD, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});

	return conn;
};

module.exports = dbConnect;
