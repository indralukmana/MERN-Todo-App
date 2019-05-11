const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
	console.log('Server is running at port: ' + PORT);
});

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
	console.log('MongoDB connected');
});
