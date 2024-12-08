const express = require('express');

const {PORT = 3001} = process.env;

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Homework for mephi conveer listening on port ${PORT}`));
