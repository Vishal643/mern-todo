const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/db');
const { readdirSync } = require('fs');

//app
const app = express();

//middlwares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const PORT = 8000 || 5000;

app.listen(PORT, async () => {
	const res = await dbConnect();
	if (res) {
		console.log('Connected');
	}
	console.log(`Server is running on ${PORT}`);
});
